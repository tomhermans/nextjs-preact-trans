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

const geocitiesTheme = {
	name: "geocities",
	buttonBg: "yellow",
	buttonColor: "blue",
};

const makeCssTheme = (jsTheme, namespace) =>
	Object.entries(jsTheme).reduce(
		(cssTheme, [key, value]) => ({
			...cssTheme,
			[`--${namespace}-${key}`]: value,
		}),
		{}
	);
