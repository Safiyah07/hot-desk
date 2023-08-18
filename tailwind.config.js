/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
      // 'sm': '576px',
      // => @media (min-width: 576px) { ... }
      
			sm: { max: '519px' },
			// => @media (min-width: 640px) { ... }

			md: {min:'520px', max: '992px'},
			lg: {min:'993px'},
			// => @media (min-width: 1024px) { ... }
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'],
	},
}
