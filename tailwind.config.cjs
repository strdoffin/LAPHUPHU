/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				baloo : ['"Baloo 2"', "sans-serif"]
			}
		}
	},

	plugins: []
};

module.exports = config;
