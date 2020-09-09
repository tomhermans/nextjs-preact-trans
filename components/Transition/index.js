import {
	TransitionGroup,
	Transition as ReactTransition,
} from "react-transition-group";
const TIMEOUT = 200;
const OPACITYTIMEOUT = 50;

const getTransitionStyles = {
	entering: {
		position: `absolute`,
		opacity: 0,
		transform: `translateY(60px)`,
	},
	entered: {
		transition: `opacity ${OPACITYTIMEOUT}ms ease-out, transform ${TIMEOUT}ms ease-out`,
		opacity: 1,
		transform: `translateX(0px)`,
	},
	exiting: {
		transition: `opacity ${OPACITYTIMEOUT}ms ease-out, transform ${TIMEOUT}ms ease-out`,
		opacity: 0,
		transform: `translateY(-40px)`,
	},
};
const Transition = ({ children, location, style }) => {
	// console.log("TransitionGroup", children, location);

	return (
		<TransitionGroup
			id="tg"
			class="transition-group"
			style={
				{
					// position: "relative",
				}
			}
		>
			<ReactTransition
				key={location}
				timeout={{
					enter: TIMEOUT,
					exit: TIMEOUT,
				}}
			>
				{(status) => (
					<div
						style={{
							...getTransitionStyles[status],
						}}
					>
						{children}
					</div>
				)}
			</ReactTransition>
		</TransitionGroup>
	);
};
export default Transition;
