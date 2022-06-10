import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile(),
    createHtmlPlugin({
      minify: true
    }),
  ],
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 100000000
  }
})
