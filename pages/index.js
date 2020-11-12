import Link from "next/link";
import Block from "../components/Block";
import SVGComponent from "../components/Svgcomponent/index";

function what() {
	document.getElementById("id").addEventListener;
}

const Home = (props) => {
	const [state, setState] = React.useState(0);
	const clrArr = ["pink", "blue", "tomato", "lime", "cyan", "red"];
	const clrArr2 = ["black", "pink", "black", "white", "purple", "grey"];
	const clrArr3 = ["#f7d9cc", "#fabca1", "#fd9d72", "#fd7a45", "#f7542b"];
	return (
		<main>
			<h1 className="px-4 ">Hello from Preact</h1>
			<Link href="/about">
				<a>Link to About</a>
			</Link>
			<div>Home page content goes here</div>
			<p>{state}</p>

			<Block bg="primary" text="grey-200">
				Block children{" "}
			</Block>

			<SVGComponent id="a" fill={clrArr} width="40" />
			<SVGComponent id="b" fill={clrArr2} width="40" />
			<SVGComponent id="c" fill={clrArr3} width="120" />

			<button
				className="px-4 py-2 mr-2 bg-blue-300 rounded-md hover:bg-blue-400"
				onClick={() => {
					setState(state - 1);
					// console.log(state, clrArr[state]);
					document.documentElement.style.setProperty(
						"--my-variable-name",
						clrArr[state]
					);
					document
						.querySelector("#__next")
						.style.setProperty("--primary", clrArr[state + 1]);
				}}
			>
				Decrement
			</button>

			<button
				className="px-4 py-2 bg-blue-300 rounded-md hover:bg-blue-400"
				onClick={() => {
					setState(state + 1);
					// console.log(state, clrArr[state]);
					document.documentElement.style.setProperty(
						"--my-variable-name",
						clrArr[state]
					);
					document
						.querySelector("#__next")
						.style.setProperty("--primary", clrArr[state + 1]);
				}}
			>
				Increment
			</button>
		</main>
	);
};

export default Home;
