import wrapper from './src/assets/pattern-bg.svg'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'img-wrapper': `url('/src/assets/pattern-bg.svg')`,
				'wave' : "url('/src/assets/pattern-curve.svg')",
				'pattern-quote': "url('/src/assets/pattern-quotes.svg')"
			},
			backgroundSize: {
				'size-quote': '15%',
				'size-wave': '60% 5rem',
				'initial': 'initial'
			}
		},
	},
	plugins: [],
}
