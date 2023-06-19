import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import path from 'path'
import legacy from '@vitejs/plugin-legacy'
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    }),
    /** 兼容传统浏览器*/
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  server: {
    proxy: {
      '/new': {
        target: 'http://www.ggapi.cn/api',
        changeOrigin: true
      }
    }
  }
})
