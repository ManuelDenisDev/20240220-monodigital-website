/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				onyx: {
					50: '#1c1b22',
					100: '#e3e3e8',
					200: '#c8c6d2',
					300: '#afadbe',
					400: '#9490a7',
					500: '#787490',
					600: '#605d75',
					700: '#4b485b',
					800: '#34323f',
					900: '#1f1e26',
				},
			},
			animation: {
				["infinite-slider"]: "infiniteSlider 20s linear infinite",
			},
			keyframes: {
				infiniteSlider: {
					"0%": { transform: "translateX(0)" },
					"100%": {
						transform: "translateX(calc(-250px * 5))",
					},
				},
			},
		},
	plugins: [],
	}
}