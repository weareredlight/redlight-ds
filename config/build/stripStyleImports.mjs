/* eslint-disable max-len */
// Removes the stylesheet imports (`import './styles/global.scss'`, `import 'react-toastify/...css'`,
// `import 'virtual:rl-tokens.css'`) that tsc copies into the .d.ts files. They mean nothing to types,
// and TypeScript 6 reports them in apps that type-check libraries (noUncheckedSideEffectImports,
// on by default, with skipLibCheck off). The styles themselves ship in dist/style.css and dist/*.js.
// Run by `yarn build:types`, after tsc.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const DIST = path.resolve(import.meta.dirname, '../../dist')
const STYLE_IMPORT = /^import ['"][^'"]+\.(?:css|scss|sass)['"];?\r?\n/gm

const files = (await readdir(DIST, { recursive: true })).filter(file => file.endsWith('.d.ts'))

let changed = 0
await Promise.all(files.map(async file => {
  const fullPath = path.join(DIST, file)
  const content = await readFile(fullPath, 'utf8')
  const stripped = content.replace(STYLE_IMPORT, '')
  if (stripped === content) return
  await writeFile(fullPath, stripped)
  changed += 1
}))

console.log(`Removed stylesheet imports from ${changed} .d.ts file(s)`)
