/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'arrow': "url('src/assets/arrow.svg')",
        'demandGraphic': "url('src/assets/landing/DemandGraphic.svg')",
				'soloMembershipGraphic': "url('src/assets/membership/soloMembershipGraphic.svg')",
				'GraphicUnderline': "url('src/assets/landing/GraphicUnderline.svg')",
      }
		},
		screens: {
			sm: { max: '519px' },
			md: {min:'520px', max: '992px'},
			lg: {min:'993px'},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'],
	},
}
