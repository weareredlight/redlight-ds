// Posts a GitHub release's notes to Slack (#design-system) through an Incoming Webhook.
//
// In CI it reads the release from the workflow event (GITHUB_EVENT_PATH) and posts to SLACK_WEBHOOK_URL.
// Locally, pass a release JSON file to preview the message without posting it:
//   gh release view 0.2.8 --json tagName,name,body,url,isPrerelease > /tmp/release.json
//   node .github/scripts/announce-release.mjs /tmp/release.json
// Without SLACK_WEBHOOK_URL it only prints the payload (and a Block Kit Builder link to preview it)

import { readFileSync } from 'node:fs'

// Slack limits: 3000 characters per section block, 50 blocks per message
const SECTION_LIMIT = 2900
const MAX_BLOCKS = 50

const pkg = JSON.parse(readFileSync(new URL('../../package.json', import.meta.url), 'utf8'))

const readRelease = () => {
  const file = process.argv[2]
  if (file) return JSON.parse(readFileSync(file, 'utf8'))
  if (process.env.GITHUB_EVENT_PATH) return JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH, 'utf8')).release
  throw new Error('No release: pass a release JSON file or run from a GitHub "release" workflow')
}

// Accepts both the workflow event shape (tag_name, html_url) and `gh release view --json` (tagName, url)
const normalize = r => ({
  tag: r.tag_name ?? r.tagName,
  body: r.body ?? '',
  url: r.html_url ?? r.url,
  prerelease: Boolean(r.prerelease ?? r.isPrerelease),
})

// Slack requires &, < and > to be escaped everywhere, code included
const escape = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Bold, italics, strikethrough and links, leaving `code` spans untouched
const inline = text => text
  .split(/(`[^`]*`)/)
  .map(part => part.startsWith('`') ? part : part
    .replace(/!?\[([^\]]+)\]\(([^)\s]+)\)/g, '<$2|$1>')
    .replace(/(?<![*\w])\*(?![*\s])([^*]+?)(?<!\s)\*(?![*\w])/g, '_$1_')
    .replace(/\*\*(.+?)\*\*|__(.+?)__/g, (_, a, b) => `*${a ?? b}*`)
    .replace(/~~(.+?)~~/g, '~$1~'))
  .join('')

const BULLETS = ['•', '◦', '▪']

// GitHub markdown -> Slack mrkdwn, line by line. Fenced code blocks pass through as they are
export const toMrkdwn = markdown => {
  let inFence = false
  const lines = markdown.replace(/\r\n/g, '\n').split('\n').map(line => {
    if (/^\s*```/.test(line)) {
      inFence = !inFence
      return line.trim()
    }
    if (inFence) return escape(line)

    const escaped = escape(line)
    const heading = escaped.match(/^#{1,6}\s+(.*?)\s*#*$/)
    if (heading) return `*${inline(heading[1]).replace(/\*/g, '')}*`

    const item = escaped.match(/^(\s*)[-*+]\s+(.*)$/)
    if (item) {
      const level = Math.floor(item[1].replace(/\t/g, '  ').length / 2)
      return `${' '.repeat(level * 2)}${BULLETS[Math.min(level, BULLETS.length - 1)]} ${inline(item[2])}`
    }
    return inline(escaped)
  })
  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim()
}

// Splits text into section-sized chunks at line breaks, preferring to break before a heading
const chunk = text => {
  const chunks = []
  let current = ''
  for (const line of text.split('\n')) {
    const next = current ? `${current}\n${line}` : line
    if (next.length <= SECTION_LIMIT) {
      current = next
      continue
    }
    if (current) chunks.push(current.trim())
    current = line
    while (current.length > SECTION_LIMIT) {
      chunks.push(current.slice(0, SECTION_LIMIT))
      current = current.slice(SECTION_LIMIT)
    }
  }
  if (current.trim()) chunks.push(current.trim())
  return chunks
}

// The notes usually open with "## v0.2.8", which the header already shows
const dropVersionHeading = (body, version) => body.replace(
  new RegExp(`^\\s*#{1,6}\\s*v?${version.replace(/\./g, '\\.')}\\s*\\n`),
  '',
)

const buildPayload = release => {
  const version = release.tag.replace(/^v/, '')
  const npmUrl = `https://www.npmjs.com/package/${pkg.name}/v/${version}`
  const storybookUrl = pkg.homepage.replace(/^http:/, 'https:')
  const title = `${release.prerelease ? '🧪' : '🚀'} Design System v${version}${release.prerelease ? ' (pre-release)' : ''}`

  const notes = toMrkdwn(dropVersionHeading(release.body, version)) || '_No release notes._'
  let sections = chunk(notes).map(text => ({ type: 'section', text: { type: 'mrkdwn', text } }))

  const head = [
    { type: 'header', text: { type: 'plain_text', text: title, emoji: true } },
    {
      type: 'context',
      elements: [{
        type: 'mrkdwn',
        text: `\`${pkg.name}@${version}\`  ·  <${release.url}|Release on GitHub>  ·  <${npmUrl}|npm>  ·  <${storybookUrl}|Storybook>`,
      }],
    },
    { type: 'divider' },
  ]
  const footer = [
    { type: 'divider' },
    {
      type: 'context',
      elements: [{ type: 'mrkdwn', text: `💬 Questions or feedback about this release? Reply in this thread.  ·  \`yarn add ${pkg.name}@${version}\`` }],
    },
  ]

  // Very long notes: keep what fits and point to GitHub for the rest
  const room = MAX_BLOCKS - head.length - footer.length
  if (sections.length > room) {
    sections = sections.slice(0, room - 1)
    sections.push({ type: 'section', text: { type: 'mrkdwn', text: `_…the notes continue on <${release.url}|GitHub>._` } })
  }

  return {
    // Shown in notifications and by clients that can't render blocks
    text: `${title.slice(2).trim()} is out. ${release.url}`,
    blocks: [...head, ...sections, ...footer],
    unfurl_links: false,
    unfurl_media: false,
  }
}

const main = async () => {
  const release = normalize(readRelease())
  const payload = buildPayload(release)
  const webhook = process.env.SLACK_WEBHOOK_URL

  if (!webhook) {
    if (process.env.GITHUB_ACTIONS) console.log('::warning::SLACK_WEBHOOK_URL is not set, so the release was not announced on Slack')
    console.log(JSON.stringify(payload, null, 2))
    console.log(`\nPreview: https://app.slack.com/block-kit-builder/#${encodeURIComponent(JSON.stringify({ blocks: payload.blocks }))}`)
    return
  }

  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const result = await response.text()
  if (!response.ok) throw new Error(`Slack answered ${response.status}: ${result}`)
  console.log(`Announced v${release.tag.replace(/^v/, '')} on Slack`)
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
