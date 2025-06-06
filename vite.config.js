import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use "/" if deploying to root on Vercel
  base: "/",
  // PostCSS config usually auto-detected; can omit this
  // css: {
  //   postcss: './postcss.config.js'
  // }
})
