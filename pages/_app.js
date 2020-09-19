import React, { useState } from "react";
import "../styles/tailwind.css";
import "./style.scss";
import ThemeContext, { themes } from "../components/themeContext";

import Layout from "../components/Layout";
import Head from "next/head";

function updateHtmlClass(theme) {
	const cl = document.documentElement;
	// cl.classList.remove("dark", "light", "geocities");
	// cl.classList.add(theme);
	cl.setAttribute("data-theme", theme);
}

const App = ({ Component, pageProps, router }) => {
	const [theme, setTheme] = useState(themes.dark);
	const toggleTheme = () => {
		theme === themes.dark ? setTheme(themes.default) : setTheme(themes.dark);
		console.log("switched", theme, themes);
		for (const [key, value] of Object.entries(theme)) {
			// console.log(`${key}: ${value}`);
			// document.documentElement.style.setProperty(`${key}`, `${value}`);
			document.documentElement.setAttribute("data-theme", "geocities");
			updateHtmlClass(theme);
		}
	};
	return (
		<ThemeContext.Provider value={theme}>
			<button onClick={toggleTheme}>Toggle Theme</button>{" "}
			{["light", "dark", "geocities", "mario"].map((themeName) => (
				<button
					key={themeName}
					className="mr-2 rounded bg-surface text-primary p-medium"
					onClick={() => updateHtmlClass(themeName)}
				>
					{themeName}
				</button>
			))}
			<Layout>
				<Head>
					<title>Tom's Next PWA App</title>
				</Head>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ThemeContext.Provider>
	);
};
export default App;
