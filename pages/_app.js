import React, { useState } from "react";
import { GlobalStyles } from "twin.macro";

import "../styles/tailwind.css";
import "./style.scss";
import { MDXProvider } from "@mdx-js/react";
import ThemeContext, { themes } from "../components/themeContext";
import { MDXEmbedProvider } from "mdx-embed";

import Layout from "../components/Layout";
import Head from "next/head";

const App = ({ Component, pageProps, router }) => {
	const [theme, setTheme] = useState(themes.dark);

	const updateHtmlClass = (theme) => {
		document.documentElement.setAttribute("data-theme", theme); // change htnl wrapper data-theme
		localStorage.setItem("data-theme", theme); // change localStorage data-theme
		setTheme(theme); // set state theme
	};

	return (
		<>
			<GlobalStyles />
			<ThemeContext.Provider value={theme}>
				{/* <button onClick={toggleTheme}>Toggle Theme</button>{" "} */}
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
					<MDXProvider>
						<MDXEmbedProvider>
							<Component {...pageProps} key={router.route} />
						</MDXEmbedProvider>
					</MDXProvider>
				</Layout>
			</ThemeContext.Provider>
		</>
	);
};
export default App;
