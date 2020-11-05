// function Block(props) {
const SVGComponent = (props) => {
	console.log("SVG props width = ", props.width);
	console.log("SVG props arr = ", props.fill);
	console.log("SVG props id = ", props.id);

	const patternId = "url(#" + props.id + ")";
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100% 100%"
			width="100vw"
			// height="100vh"
		>
			<pattern
				width={props.width}
				height={props.width}
				patternUnits="userSpaceOnUse"
				id={props.id}
				viewBox="50 -100 100 100"
				overflow="visible"
			>
				<path fill={props.fill[0]} d="M50-100h100V0H50z" />
				<path fill={props.fill[1]} d="M200-50h-50l-20 25 20 25h50l-20-25z" />
				<path fill={props.fill[2]} d="M100-50h50l20-25-20-25h-50l20 25z" />
				<path fill={props.fill[3]} d="M100-50H50L30-25 50 0h50L80-25z" />
				<g>
					<path fill={props.fill[4]} d="M0-50h50l20-25-20-25H0l20 25z" />
				</g>
			</pattern>
			<rect fill={patternId} width="100%" height="100%" />
		</svg>
	);
};

export default SVGComponent;
