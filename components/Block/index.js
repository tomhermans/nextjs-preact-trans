// function Block(props) {
const Block = (props) => {
	return (
		<div
			className={
				"p-8 border border-solid bg-" + props.bg + " text-" + props.text
			}
		>
			{/* <div className={'FancyBorder FancyBorder-' + props.color}> */}
			{props.children} / bg-{props.bg} / text-{props.text}
		</div>
	);
};

export default Block;
