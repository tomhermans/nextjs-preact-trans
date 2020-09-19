import React from "react";
import Link from "next/link";

const About = (props) => {
	return (
		<main>
			<h1 class="text-2xl font-bold bg-blue-400 px-3 rounded">About us</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
			<div>About page content</div>
		</main>
	);
};

export default About;
