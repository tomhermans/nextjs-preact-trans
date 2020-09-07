import Link from "next/link";

const Home = (props) => {
	const [state, setState] = React.useState(0);
	return (
		<main>
			<h1>Hello from Preact</h1>
			<Link href="/about">
				<a>About</a>
			</Link>
			<div>Home page content goes here</div>
			<p>{state}</p>
			<button onClick={() => setState(state + 1)}>Increment</button>
		</main>
	);
};

export default Home;
