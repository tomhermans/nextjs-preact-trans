const DEFAULT = "border border-solid border-black rounded";

const COLORS = {
	green: "text-white bg-green-400 hover:bg-green-500",
	red: "text-white bg-red-400 hover:bg-red-500",
	blue: "text-white bg-blue-600 hover:bg-blue-700",
};

function Button({ bg, children, className, ...props }) {
	className = [className, DEFAULT, COLORS[bg]].join(" ");

	return (
		<button {...props} className={className}>
			{children}
		</button>
	);
}

export default Button;
