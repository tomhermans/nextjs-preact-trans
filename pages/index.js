import Link from "next/link";

const Home = (props) => {
	const [state, setState] = React.useState(0);
	const clrArr = ["pink", "blue", "tomato", "lime", "cyan", "red"];
	return (
		<main>
			<h1 class=" px-4">Hello from Preact</h1>
			<Link href="/about">
				<a>About</a>
			</Link>
			<div>Home page content goes here</div>
			<p>{state}</p>
			<button
				class="px-4 py-2 bg-blue-300 dark:bg-blue-800 rounded-md mr-2 hover:bg-blue-400"
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
				class="px-4 py-2 bg-blue-300 rounded-md hover:bg-blue-400"
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
