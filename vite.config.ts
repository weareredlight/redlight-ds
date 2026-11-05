import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { cssModules, scssOptions, tokensPlugin } from './config/vite/designSystem'

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
})
