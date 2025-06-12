import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
	assetsInclude: ['**/*.png', '**/*.jpg'],
  plugins: [
    tailwindcss(),
    sveltekit(),
  ],
  server: {
    host: true,
    port: 5173,
  },
});