export default function Header(props) {
	return (
		<>
			<h1 class="text-surface text-red-400">Hello, {props.title} - header</h1>
			<p class="text-red-800 dark:text-green-400">Some Paragraph</p>
		</>
	);
}
