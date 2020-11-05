import React from "react";
import Link from "next/link";

const About = (props) => {
	return (
		<main>
			<h1 class="text-30 font-bold bg-blue-400 px-3 rounded">FONTTEST</h1>
			<Link href="/">
				<a>Link to Home</a>
			</Link>
			<div>FONTTEST page </div>
		</main>
	);
};

export default About;
