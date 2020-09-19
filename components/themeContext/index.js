import React from "react";

export const themes = {
	dark: {
		colors: {
			primary: "#e320b6",
			"primary-active": "#ff00c4",
			surface: "#111",
			base: "#000",
			dark: "#ccc",
		},
	},
	default: {
		"--bg": "#fde",
		"--clr": "#422",
	},
	choco: {
		"--bg": "#322",
		"--clr": "#eee",
	},
	beach: {
		"--bg": "#fde",
		"--clr": "#422",
	},
	geocities: {
		"--bg": "#fde",
		"--clr": "#422",
	},
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;
