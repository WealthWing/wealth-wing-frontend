import { SVGProps } from 'react';
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="m14 34 20-20m0 20V14H14"
			stroke="currentColor"
			strokeWidth={4}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgArrowUpRight;
