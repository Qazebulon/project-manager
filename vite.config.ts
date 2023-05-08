import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  // TODO: add the correct base if I want to deploy to github pages...
  // base: '',
  plugins: [svelte()],
})
