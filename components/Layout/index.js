import { useRouter } from "next/router";
import Transition from "../Transition";
import ThemeContext from "../themeContext";

import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import FooterSVG from "../Footer/footersvg";
import { useContext, useState } from "react";

const Layout = ({ children }) => {
	const theme = useContext(ThemeContext);
	const router = useRouter();
	console.log("theme", theme);

	return (
		<div className="layout">
			theme Object: {JSON.stringify(theme)}
			{/* Header component that doesn't animate */}
			<Header title="Tom" />
			{/* <button onClick={toggleTheme}>Click to toggle theme</button> */}
			<Nav />
			<p class="text-lg font-medium leading-6 text-primary">
				Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
				voluptatum cupiditate veritatis in accusamus quisquam.
			</p>
			<Transition location={router.pathname}>
				<main className="bg-squiggly-pseudo main">{children}</main>
			</Transition>
			<Footer title="At the bottom" />
			{/* <FooterSVG /> */}
		</div>
	);
};
export default Layout;
