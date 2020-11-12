import React from "react";
import Link from "next/link";

const About = (props) => {
	return (
        <main>
			<h1 className="rounded px-3 font-bold text-30">FONTTEST</h1>
			<Link href="/">
				<a>Link to Home</a>
			</Link>
			<div>FONTTEST page </div>
		</main>
    );
};

export default About;
