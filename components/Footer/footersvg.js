export default function FooterSVG(props) {
	return (
		<svg
			viewBox="0 0 1400 1400"
			xmlns="http://www.w3.org/2000/svg"
			clip-rule="evenodd"
			stroke-linejoin="round"
			stroke-miterlimit="2"
		>
			<defs>
				<filter id="noise">
					<feComponentTransfer in="SourceGraphic" result="ct">
						<feFuncB type="linear" slope=".6" />
						<feFuncG type="linear" slope="0" />
					</feComponentTransfer>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="2"
						numOctaves="10"
						result="noisy"
					/>
					<feColorMatrix type="saturate" values=".5" />
					<feBlend in="ct" in2="noisy" mode="multiply" />
				</filter>
				<filter id="squiggly-00">
					<feTurbulence
						baseFrequency="0.32"
						id="turbulence"
						numOctaves="3"
						result="noise"
						seed="10"
					></feTurbulence>
					<feDisplacementMap
						id="displacement"
						in2="noise"
						in="SourceGraphic"
						scale="18"
					></feDisplacementMap>
				</filter>
				<filter id="squiggly-0">
					<feturbulence
						basefrequency="0.02"
						id="turbulence"
						numoctaves="3"
						result="noise"
						seed="0"
					></feturbulence>
					<fedisplacementmap
						id="displacement"
						in2="noise"
						in="SourceGraphic"
						scale="2"
					></fedisplacementmap>
				</filter>
				<filter id="squiggly-1">
					<feturbulence
						basefrequency="0.02"
						id="turbulence"
						numoctaves="3"
						result="noise"
						seed="1"
					></feturbulence>
					<fedisplacementmap
						in2="noise"
						in="SourceGraphic"
						scale="3"
					></fedisplacementmap>
				</filter>
				<filter id="squiggly-2">
					<feturbulence
						basefrequency="0.02"
						id="turbulence"
						numoctaves="3"
						result="noise"
						seed="2"
					></feturbulence>
					<fedisplacementmap
						in2="noise"
						in="SourceGraphic"
						scale="2"
					></fedisplacementmap>
				</filter>
				<filter id="squiggly-3">
					<feturbulence
						basefrequency="0.02"
						id="turbulence"
						numoctaves="3"
						result="noise"
						seed="3"
					></feturbulence>
					<fedisplacementmap
						in2="noise"
						in="SourceGraphic"
						scale="3"
					></fedisplacementmap>
				</filter>
				<filter id="squiggly-4">
					<feturbulence
						basefrequency="0.02"
						id="turbulence"
						numoctaves="3"
						result="noise"
						seed="4"
					></feturbulence>
					<fedisplacementmap
						in2="noise"
						in="SourceGraphic"
						scale="1"
					></fedisplacementmap>
				</filter>

				<filter id="disp">
					<feTurbulence
						id="feTurbulence836"
						result="turbulence"
						baseFrequency="1"
						seed="360"
						numOctaves="1"
						type="fractalNoise"
					/>
					<feDisplacementMap
						id="feDisplacementMap838"
						xChannelSelector="R"
						yChannelSelector="G"
						scale="0.6"
						in2="turbulence"
						in="SourceGraphic"
					/>
				</filter>
			</defs>
		</svg>
	);
}
