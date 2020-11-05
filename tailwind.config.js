// ISSUE self-referencing custom css properties
// design tokens file OR the full tailwind config
// loop over the props
// generate all custom props ( var(--color-red-500 etc ))
// generate a new colors array by looping
// e.g. customcolors : [100: "var(--color-red-100)",200: "var(--color-red-200)",.. ]

const tinycolor = require("tinycolor2"); // https://github.com/bgrins/TinyColor
var color = tinycolor("lime");
var color1 = tinycolor("green");

console.log("tinycolor", color, color.toHslString());
console.log(color.getBrightness(), color.isLight());
console.log(color1.getBrightness(), color1.isLight());

var colors = tinycolor("#f00").triad();
console.log(colors);
colors.map((t) => {
	console.log(t.toHslString());
});

const themeSwapper = require("tailwindcss-theme-swapper");
const baseTheme = {
	colors: {
		primary: "#384cff",
		"primary-active": "#0014c7",
		air: "#bada55",
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
		air: "#baba55",
		surface: "#111",
		base: "#000",
		dark: "#ccc",
	},
};

const geocitiesTheme = {
	colors: {
		primary: "#f9e0e",
		"primary-active": "#70a300",
		air: "#daaa55",
		surface: "#2f4d2f",
		base: "var(--color-green-800)", //"#243b24"
		dark: "#99a663",
	},
};

const marioTheme = {
	colors: {
		primary: "#ff0000",
		"primary-active": "#4db000",
		air: "#bada55",
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
// console.log(process.env);

module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === "production" ? true : false,
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
		// colors: {
		// 	gray: {
		// 		100: "var(--color-gray-500)",
		// 		200: "var(--color-gray-400)",
		// 		300: "var(--color-gray-300)",
		// 		400: "var(--color-gray-200)",
		// 		500: "var(--color-gray-100)",
		// 		600: "var(--color-gray-600)",
		// 		700: "var(--color-gray-700)",
		// 		800: "var(--color-gray-800)",
		// 		900: "var(--color-gray-900)",
		// 	},
		// },
		fontSize: {
			12: "12px",
			14: "14px",
			16: "16px",
			18: "18px",
			20: "20px",
			24: "24px",
			30: "30px",
			36: "36px",
			48: "48px",
			64: "64px",
		},
		colors: {
			gray: {
				100: "#ccc",
				200: "#bbb",
				300: "#ddd",
				400: "#f00",
				500: "#0f0",
				600: "#00f",
				700: "var(--color-gray-700)",
				800: "var(--color-gray-800)",
				900: "var(--color-gray-900)",
			},
		},
		extend: {
			screens: {
				light: { raw: "(prefers-color-scheme: light)" },
				dark: { raw: "(prefers-color-scheme: dark)" },
			},
			colors: {
				grey: {
					100: "var(--color-gray-500)",
					200: "var(--color-gray-400)",
					300: "var(--color-gray-300)",
					400: "var(--color-gray-200)",
					500: "var(--color-gray-100)",
					600: "var(--color-gray-600)",
					700: "var(--color-gray-700)",
					800: "var(--color-gray-800)",
					900: "var(--color-gray-900)",
				},
			},
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
		require("tailwind-css-variables")(
			// exposes all TW custom properties - https://github.com/omarkhatibco/tailwind-css-variables
			{
				// modules
			},
			{
				// options
			}
		),
		function ({ addBase, config }) {
			addBase({
				html: {
					color: config("theme.colors.black"),
					backgroundColor: config("theme.colors.white"),
				},
				"@screen dark": {
					html: {
						color: config("theme.colors.white"),
						backgroundColor: config("theme.colors.black"),
					},
				},
			});
		},
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
