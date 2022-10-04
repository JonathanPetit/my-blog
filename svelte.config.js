import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { resolve } from 'path'
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex({
            extensions: ['.md', '.svx'],
        }),
		preprocess({
		  	postcss: true,
		}),
	],

	kit: {
		adapter: adapter(),
		alias: {
			'@components': resolve('./src/components'),
			'@svg': resolve('./src/svg'),
			'@inc': resolve('./src/inc'),
			'@utils': resolve('./src/utils'),
			'@store': resolve('./src/store'),
		},
	},
	extensions: ['.svelte', '.svelte.md', '.md', '.svx', '.svg'],

};

export default config;