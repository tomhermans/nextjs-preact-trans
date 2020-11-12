import Button from "../Elements/Button/Button";
export default function Header(props) {
	return (
		<>
			<h1 className="text-surface text-primary-100">
				Hello, {props.title} - header
			</h1>
			<p className="text-primary-100 text-primary ">Some Paragraph</p>
			<Button size="sm" textColor="red-600" bgColor="blue-500">
				Enable
			</Button>
		</>
	);
}
