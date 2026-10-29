import adapter from '@sveltejs/adapter-static';

const preview = process.env.PREVIEW === '1';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ pages: 'build', assets: 'build', fallback: '404.html' }),
		paths: {
			// GitHub Pages serves project sites from /<repo-name>. The deploy workflow sets BASE_PATH.
			base: process.env.BASE_PATH ?? ''
		},
		// PREVIEW=1 bundles everything into a single HTML file for sharing a standalone preview.
		output: preview ? { bundleStrategy: 'inline' } : {}
	}
};

export default config;
