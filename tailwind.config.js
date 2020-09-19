const themeSwapper = require("tailwindcss-theme-swapper");
const baseTheme = {
	colors: {
		primary: "#384cff",
		"primary-active": "#0014c7",
		surface: "#ddd",
		base: "#eee",
		dark: "#222",
	},
	spacing: {
		small: "4px",
		medium: "8px",
		large: "16px",
	},
	borderRadius: {
		default: "5px",
	},
};

const darkTheme = {
	colors: {
		primary: "#e320b6",
		"primary-active": "#ff00c4",
		surface: "#111",
		base: "#000",
		dark: "#ccc",
	},
};

const geocitiesTheme = {
	colors: {
		primary: "#f9e0e",
		"primary-active": "#70a300",
		surface: "#2f4d2f",
		base: "#243b24",
		dark: "#99a663",
	},
};

const marioTheme = {
	colors: {
		primary: "#ff0000",
		"primary-active": "#4db000",
		surface: "#1500ff",
		base: "#fdff00",
		dark: "#f000ff",
	},
	borderRadius: {
		default: "0",
	},
};

const spacierTheme = {
	spacing: {
		small: "8px",
		medium: "16px",
		large: "32px",
	},
};

const squarierTheme = {
	borderRadius: {
		default: "0",
	},
};

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
			// colors: {
			// 	primary: "var(--primary)",
			// 	secondary: "var(--secondary)",
			// 	main: "var(--main)",
			// 	background: "var(--background)",
			// 	header: "var(--header)",
			// 	accent: "var(--accent)",
			// },
		},
	},
	variants: {},
	plugins: [
		themeSwapper({
			themes: [
				{
					name: "root",
					selectors: [":root"],
					theme: baseTheme,
				},
				{
					name: "prefers-dark",
					mediaQuery: "@media (prefers-color-scheme: dark)",
					theme: darkTheme,
				},
				{
					name: "prefers-light",
					mediaQuery: "@media (prefers-color-scheme: light)",
					theme: baseTheme,
				},
				{
					name: "base",
					selectors: [".light", '[data-theme="light"]'],
					theme: baseTheme,
				},
				{
					name: "dark",
					selectors: [".dark", '[data-theme="dark"]'],
					theme: darkTheme,
				},
				{
					name: "geocities",
					selectors: [".geocities", "[geocities]", '[data-theme="geocities"]'],
					// mediaQuery: "@media (prefers-color-scheme: light)",
					theme: geocitiesTheme,
				},
				{
					name: "mario",
					selectors: [".mario", "[mario]", '[data-theme="mario"]'],
					// mediaQuery: "@media (prefers-color-scheme: light)",
					theme: marioTheme,
				},
				{
					name: "high-contrast",
					mediaQuery: "@media (prefers-contrast: high)",
					theme: {
						colors: {
							base: "#ddd",
						},
						borderRadius: {
							default: "0",
						},
					},
				},
				{ name: "spacier", selectors: [".spacier"], theme: spacierTheme },
				{ name: "squarier", selectors: [".squarier"], theme: squarierTheme },
			],
		}),
	],
};
