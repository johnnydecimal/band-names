// tailwind.config.js
// https://tailwindcss.com/docs/installation#3-create-your-tailwind-config-file-optional
module.exports = {
	purge: ["./*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			header: ["Shrikhand"],
			metal: ["'Metal Mania'"],
		},
		container: {
			center: true,
		},
		extend: {},
	},
	variants: {},
	plugins: [],
};
