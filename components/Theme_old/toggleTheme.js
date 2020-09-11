// https://blog.bitsrc.io/theming-react-components-with-css-variables-ee52d1bb3d90
import { useMemo, useState } from "react";

const darkTheme = {
	name: "dark",
	buttonBg: "black",
	buttonColor: "white",
	hoverColor: "green",
};

const lightTheme = {
	name: "light",
	buttonBg: "white",
	buttonColor: "black",
	hoverColor: "red",
};

const makeCssTheme = (jsTheme, namespace) =>
	Object.entries(jsTheme).reduce(
		(cssTheme, [key, value]) => ({
			...cssTheme,
			[`--${namespace}-${key}`]: value,
		}),
		{}
	);

const [theme, setTheme] = useState(darkTheme);
const cssTheme = useMemo(() => makeCssTheme(theme, "xx"), [theme]);

function toggleTheme() {
	setTheme((currentTheme) =>
		currentTheme.name === "dark" ? lightTheme : darkTheme
	);
}

export default toggleTheme;
