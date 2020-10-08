import Button from "../Elements/Button/Button";
export default function Header(props) {
	return (
		<>
			<h1 class="text-surface text-red-400">Hello, {props.title} - header</h1>
			<p class="text-red-800 dark:text-green-400">Some Paragraph</p>
			<Button size="sm" textColor="red-600" bgColor="blue-500">
				Enable
			</Button>
		</>
	);
}
