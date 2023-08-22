/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'unyth-dark': {
					50: '#E6E4F3',
					100: '#B5AFDA',
					200: '#837AC2',
					300: '#564BA3',
					400: '#3A326D',
					500: '#1e1a38',
					600: '#18152E',
					700: '#131024',
					800: '#0E0C19',
					900: '#08070F'
				},
				'unyth-light': {
					50: '#F2F4F6',
					100: '#E9EDF0',
					200: '#E0E5EA',
					300: '#D8DEE4',
					400: '#ced6dd',
					500: '#C0C6CC',
					600: '#A1B0BE',
					700: '#738A9E',
					800: '#506373',
					900: '#303B45'
				},
				'unyth-accent': {
					50: '#FFFDE6',
					100: '#FFF9B5',
					200: '#FFF584',
					300: '#FFF153',
					400: '#FFED22',
					500: '#ffda00',
					600: '#C4B400',
					700: '#998C00',
					800: '#6D6400',
					900: '#413C00'
				}
			}
		}
	},
	plugins: []
};
