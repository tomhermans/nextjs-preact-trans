import React from "react";

export const themes = {
	dark: {
		"--bg": "#322",
		"--clr": "#eee",
	},
	light: {
		"--bg": "#fde",
		"--clr": "#422",
	},
};

const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;
