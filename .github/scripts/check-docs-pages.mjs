// Opens every docs page of the built Storybook (storybook-static) in headless Chrome and fails if
// one doesn't render. `storybook build` passes even when a page breaks at runtime (e.g. an MDX page
// that uses a component it doesn't import), so this catches what the build can't.
//
//   yarn build-storybook && yarn test:docs
//
// Chrome: CHROME_PATH, or google-chrome / chromium on the PATH, or the macOS app.

import { execFile } from 'node:child_process'
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import path from 'node:path'
import { promisify } from 'node:util'

const run = promisify(execFile)
const ROOT = path.resolve(import.meta.dirname, '../../storybook-static')
const CONCURRENCY = 4
const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2',
}

const findChrome = async () => {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH
  for (const name of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser']) {
    try {
      const { stdout } = await run('which', [name])
      if (stdout.trim()) return stdout.trim()
    } catch { /* not on the PATH */ }
  }
  const mac = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  if (existsSync(mac)) return mac
  throw new Error('Chrome not found: set CHROME_PATH')
}

// A static server for storybook-static, on a free port
const serve = () => new Promise(resolve => {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost')
    const file = path.join(ROOT, decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname))
    try {
      const body = await readFile(file)
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream' })
      res.end(body)
    } catch {
      res.writeHead(404).end()
    }
  })
  server.listen(0, '127.0.0.1', () => resolve(server))
})

// The page's markup once it rendered. Storybook adds `sb-show-errordisplay` to <body> when a story
// or docs page throws
const check = async (chrome, baseUrl, id) => {
  const url = `${baseUrl}/iframe.html?id=${id}&viewMode=docs`
  const args = ['--headless=new', '--disable-gpu', '--virtual-time-budget=15000', '--dump-dom', url]
  if (process.env.CI) args.unshift('--no-sandbox')
  const { stdout } = await run(chrome, args, { maxBuffer: 64 * 1024 * 1024, timeout: 90_000 })
  const bodyClass = stdout.match(/<body[^>]*class="([^"]*)"/)?.[1] ?? ''
  if (bodyClass.includes('sb-show-errordisplay')) {
    const message = stdout.match(/id="error-message"[^>]*>([^<]*)/)?.[1] ?? 'see the page'
    return message.trim()
  }
  if (!/id="storybook-docs"[^>]*>\s*<div/.test(stdout)) return 'the page is empty'
  return null
}

if (!existsSync(path.join(ROOT, 'index.json'))) {
  console.error('No storybook-static/index.json: run `yarn build-storybook` first')
  process.exit(1)
}

const { entries } = JSON.parse(await readFile(path.join(ROOT, 'index.json'), 'utf8'))
const ids = Object.values(entries).filter(entry => entry.type === 'docs').map(entry => entry.id)
const chrome = await findChrome()
const server = await serve()
const baseUrl = `http://127.0.0.1:${server.address().port}`

const failures = []
const queue = [...ids]
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length) {
    const id = queue.shift()
    try {
      const problem = await check(chrome, baseUrl, id)
      if (problem) failures.push(`${id}: ${problem}`)
    } catch (error) {
      failures.push(`${id}: ${error.message.split('\n')[0]}`)
    }
  }
}))
server.close()

if (failures.length) {
  console.error(`${failures.length} of ${ids.length} docs pages failed:\n${failures.map(f => `  - ${f}`).join('\n')}`)
  process.exit(1)
}
console.log(`All ${ids.length} docs pages rendered`)
