import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { cssModules, tokensPlugin } from './config/vite/designSystem'

// Library build: ESM + CJS keeping the source module structure, plus one extracted CSS file.
export default defineConfig({
  plugins: [react(), tokensPlugin()],
  css: {
    modules: cssModules,
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
      // except our own virtual modules (the generated tokens CSS)
      external: id => !id.startsWith('.')
        && !path.isAbsolute(id)
        && !id.startsWith('\0')
        && !id.startsWith('virtual:'),
      output: [
        {
          format: 'es',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: 'esm/[name].js',
          assetFileNames: 'style.css',
        },
        {
          format: 'cjs',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: 'cjs/[name].js',
          exports: 'named',
          assetFileNames: 'style.css',
        },
      ],
    },
  },
})
