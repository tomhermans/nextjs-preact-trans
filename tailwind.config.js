module.exports = {
	purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	}, //https://tailwindcss.com/docs/upcoming-changes
	purge: [],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				main: "var(--main)",
				background: "var(--background)",
				header: "var(--header)",
				accent: "var(--accent)",
			},
		},
	},
	variants: {},
	plugins: [],
};
