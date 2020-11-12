import React from "react";
import Block from "../components/Block";
const Testpage = (props) => {
	const arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];
	const type = ["primary", "secondary", "neutral"];

	return (
		<main>
			<h1 className="px-3 font-bold rounded text-30 bg-secondary-400">
				TESTING
			</h1>

			<div className="flex">
				<div>
					Test page
					{arr.map((colorvalue, i) => {
						console.log("Entered", colorvalue, i);
						// Return the element. Also pass key
						return (
							<Block bg={type[0] + "-" + colorvalue} text="black">
								text
							</Block>
						);
					})}
				</div>
				<div>
					Test page
					{arr.map((colorvalue, i) => {
						console.log("Entered", colorvalue, i);
						// Return the element. Also pass key
						return (
							<Block bg={type[1] + "-" + colorvalue} text={colorvalue}>
								text
							</Block>
						);
					})}
				</div>
				<div>
					Test page
					{arr.map((colorvalue, i) => {
						console.log("Entered", colorvalue, i);
						// Return the element. Also pass key
						return (
							<Block bg={type[2] + "-" + colorvalue} text={colorvalue}>
								text
							</Block>
						);
					})}
				</div>
			</div>
		</main>
	);
};

export default Testpage;
