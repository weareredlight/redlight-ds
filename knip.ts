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
  },
} satisfies KnipConfig
