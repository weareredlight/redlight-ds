import type { KnipConfig } from 'knip'

export default {
  // Loaded by playground/index.html, which knip doesn't parse
  entry: ['playground/main.tsx'],
  project: ['src/**/*.{ts,tsx,scss,sass,mdx}', 'playground/**/*.{ts,tsx}'],
  // Only needed by tsconfig.json's "importHelpers", and the JS build goes through Vite
  ignoreDependencies: ['tslib'],
  compilers: {
    // The docs pages import their components and snippets from .mdx files. Knip's built-in MDX
    // compiler only turns on with an @mdx-js/* dependency, which we only get through Storybook
    mdx: (text: string) => [...text.matchAll(/^import[^;]+?from\s+['"][^'"]+['"]/gm)].join('\n'),
    // Sass resolves `@use 'styles/typography'` from src (loadPaths in config/vite/designSystem.ts),
    // which knip's built-in SCSS compiler doesn't know about. Point it at the partial through the
    // tsconfig `src/*` path instead. Built-in modules (sass:map) are skipped
    scss: (text: string) => [...text.matchAll(/@(?:use|forward|import)\s+['"]([^'":]+)['"]/g)]
      .map(([, spec]) => {
        const partial = spec.replace(/(^|\/)_?([^/]+)$/, '$1_$2.scss')
        return `import '${spec.startsWith('.') ? partial : `src/${partial}`}'`
      })
      .join('\n'),
  },
} satisfies KnipConfig
