module.exports = {
	purge: {
    enabled: true,
		content: [
			"./components/**/*.{js,mdx,jsx}",
			"./pages/**/*.{js,mdx,jsx}",
			"./next.config.js",
		],
  },
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	}, //https://tailwindcss.com/docs/upcoming-changes
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
