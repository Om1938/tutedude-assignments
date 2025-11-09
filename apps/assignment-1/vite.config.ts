import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/assignment-1/',
  build: {
    outDir: '../../dist/assignment-1'
  }
})
