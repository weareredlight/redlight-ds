import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { cssModules, tokensPlugin } from './config/vite/designSystem'

export default defineConfig({
  plugins: [react(), tokensPlugin()],
  css: {
    modules: cssModules,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
