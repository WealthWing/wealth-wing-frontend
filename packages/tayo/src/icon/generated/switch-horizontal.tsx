import { SVGProps } from 'react';

const SvgSwitchHorizontal = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 40 40"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M13.333 11.667h20m0 0L26.667 5m6.666 6.667-6.666 6.666m0 10h-20m0 0L13.333 35m-6.666-6.667 6.666-6.666"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgSwitchHorizontal;
