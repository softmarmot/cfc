import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const preview = process.env.PREVIEW === '1';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	build: preview ? { assetsInlineLimit: 10_000_000 } : {}
});
