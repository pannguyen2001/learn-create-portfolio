import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path' // Import the path module: npm install --save-dev @types/node
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/configs': path.resolve(__dirname, 'src/configs'),
      '@/data': path.resolve(__dirname, 'src/data'),
      '@/helpers': path.resolve(__dirname, 'src/helpers'),
      '@/layouts': path.resolve(__dirname, 'src/layouts'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/routers': path.resolve(__dirname, 'src/routers'),
      '@/sections': path.resolve(__dirname, 'src/sections'),
      '@/services': path.resolve(__dirname, 'src/services'),
      '@/tests': path.resolve(__dirname, 'src/tests'),
      '@/types': path.resolve(__dirname, 'src/types'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/zustand': path.resolve(__dirname, 'src/zustand'),
    },
  },
})
