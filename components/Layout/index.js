import { useRouter } from "next/router";
import Transition from "../Transition";
import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";
import FooterSVG from "../Footer/footersvg";

const Layout = ({ children }) => {
	const router = useRouter();

	return (
		<div className="layout">
			{/* Header component that doesn't animate */}
			<Header title="Tom" />
			<Nav />

			<Transition location={router.pathname}>
				<main className="bg-squiggly-pseudo main">{children}</main>
			</Transition>

			<Footer title="At the bottom" />
			<FooterSVG />
		</div>
	);
};
export default Layout;
