import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Product-Landing-page-Vite-React/', // 👈 change this to your repo name
})