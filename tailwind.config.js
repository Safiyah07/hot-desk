/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      
			tablet: '640px',
			// => @media (min-width: 640px) { ... }

			laptop: '1024px',
			// => @media (min-width: 1024px) { ... }

			desktop: '1280px',
			// => @media (min-width: 1280px) { ... }
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'],
	},
}
