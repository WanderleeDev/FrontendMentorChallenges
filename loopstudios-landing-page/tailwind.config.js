/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'Josefin-Sans': 'Josefin Sans, sans-serif',
				'Alata': 'Alata, sans-serif',
			},
			screens: {
				'mobile': '375px',
				'desktop': '1440px',
			},
			fontSize: {
				title: 'clamp(2rem, 4vw, 3rem)',
				subTitle: 'clamp(1.8rem, 3.8vw, 2.8rem)',
				'heading-3': 'clamp(1.4rem, 3.5vw, 2.3rem)',
			},
			backgroundImage: {
				mobile: "url('assets/images/mobile/image-hero.webp')",
				desktop: "url('assets/images/desktop/image-hero.webp')",
			},
			animation: {
				blurBackground: 'blurBackgroundTransition linear both',
			},
			keyframes: {
				blurBackgroundTransition: {
					'to': {
						'background-color': 'rgb(0 0 0 / 0.25)',
						'backdrop-filter': 'blur(0.8rem)'
					}
				}
			}
		},
	},
	plugins: [],
};
