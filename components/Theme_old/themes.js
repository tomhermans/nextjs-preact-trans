const darkTheme = {
	name: "dark",
	buttonBg: "black",
	buttonColor: "white",
};

const lightTheme = {
	name: "light",
	buttonBg: "white",
	buttonColor: "black",
};

const makeCssTheme = (jsTheme, namespace) =>
	Object.entries(jsTheme).reduce(
		(cssTheme, [key, value]) => ({
			...cssTheme,
			[`--${namespace}-${key}`]: value,
		}),
		{}
	);
