/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		extend: {
			animation: {
				'hand-waving': 'handWaving 3s infinite',
			},
			keyframes: {
				handWaving: {
					'0%': {
						transform: 'rotate(0deg)'
					},

					'10%': {
						transform: 'rotate(14deg)'
					},

					/* five values can be played with to make the waving more or less */
					'20%': {
						transform: 'rotate(-8deg)'
					},
					'30%': {
						transform: 'rotate(14deg)'
					},

					'40%': {
						transform: 'rotate(-4deg)'
					},

					'50%': {
						transform: 'rotate(10deg)'
					},

					'60%': {
						transform: 'rotate(0deg)'
					},

					/* Reset for the last half to pause */
					'100%': {
						transform: 'rotate(0deg)'
					}
				}
			}
		},
	},
	plugins: [],
}
