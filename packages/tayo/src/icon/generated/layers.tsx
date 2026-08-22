import { SVGProps } from 'react';
const SvgLayers = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#layers_svg__a)">
			<path
				d="M1.667 14.167 10 18.333l8.333-4.166M1.667 10 10 14.167 18.333 10M10 1.667 1.667 5.833 10 10l8.333-4.167L10 1.667Z"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="layers_svg__a">
				<path fill="#fff" d="M0 0h20v20H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgLayers;
