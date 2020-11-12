import "twin.macro";

import { useRouter } from "next/router";
import Transition from "../Transition";
import ThemeContext from "../themeContext";

import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import FooterSVG from "../Footer/footersvg";
import { useContext, useState } from "react";
import Button from "../Elements/Button/Button";

const Layout = ({ children }) => {
	const theme = useContext(ThemeContext);
	const router = useRouter();
	// console.log("themes : ", theme);
	// console.log("themeContext : ", ThemeContext);

	return (
        <div className="layout">
			<Header title="Tom" />
			<Nav />
			<Transition location={router.pathname}>
				<main className="bg-squiggly-pseudo main">{children}</main>
			</Transition>

			<Footer title="At the bottom" />

			<Button bg="red" className="py-3 mb-2">
				Button
			</Button>
			<Button bg="blue" className="py-3 mb-2">
				Button
			</Button>
			{/* <FooterSVG /> */}
		</div>
    );
};
export default Layout;
