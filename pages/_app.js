import React, { useState } from "react";
import "../styles/tailwind.css";
import "./style.scss";
import ThemeContext, { themes } from "../components/themeContext";

import Layout from "../components/Layout";
import Head from "next/head";

const App = ({ Component, pageProps, router }) => {
	const [theme, setTheme] = useState(themes.dark);
	const toggleTheme = () => {
		theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
		// console.log("switched", theme);
		for (const [key, value] of Object.entries(theme)) {
			console.log(`${key}: ${value}`);
			document.documentElement.style.setProperty(`${key}`, `${value}`);
		}
	};
	return (
		<ThemeContext.Provider value={theme}>
			<Layout>
				<button onClick={toggleTheme}>Toggle Theme</button>{" "}
				<Head>
					<title>Tom's Next PWA App</title>
				</Head>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ThemeContext.Provider>
	);
};
export default App;
