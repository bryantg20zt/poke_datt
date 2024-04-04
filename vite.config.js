import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@views': path.resolve(__dirname, './src/views'),
      '@misc': path.resolve(__dirname, './src/components/misc'),
      '@fonts': path.resolve(__dirname, './src/fonts'),
      '@router': path.resolve(__dirname, './src/router'),
      '@layout': path.resolve(__dirname, './src/layout')
    }
  }
})
