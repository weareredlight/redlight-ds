import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { cssModules, scssOptions, tokensPlugin } from './config/vite/designSystem'

// Components use state, effects and event handlers, so in React Server Components (Next.js App
// Router) they must be Client Components. The directive goes on each component's index, not on the
// entry or the styles: `theme`, `getColor` and the selectors (src/selectors.ts) stay plain values
// in Server Components.
const useClientBanner = (chunk: { fileName: string }) => (
  /\/components\/(?:[^/]+\/)+index\.js$/.test(chunk.fileName) ? "'use client';" : ''
)

// Library build: ESM + CJS keeping the source module structure, plus one extracted CSS file.
export default defineConfig({
  plugins: [react(), tokensPlugin()],
  css: {
    modules: cssModules,
    preprocessorOptions: { scss: scssOptions },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: true,
    minify: false,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
    },
    rollupOptions: {
      // Every bare import (dependencies, peer dependencies and their subpaths) stays external,
      // except our own virtual modules (the generated tokens CSS) and our 'src/...' imports
      external: id => !id.startsWith('.')
        && !path.isAbsolute(id)
        && !id.startsWith('\0')
        && !id.startsWith('virtual:')
        && id !== 'src'
        && !id.startsWith('src/'),
      output: [
        {
          format: 'es',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: 'esm/[name].js',
          assetFileNames: 'style.css',
          banner: useClientBanner,
        },
        {
          format: 'cjs',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: 'cjs/[name].js',
          exports: 'named',
          assetFileNames: 'style.css',
          banner: useClientBanner,
        },
      ],
    },
  },
})
