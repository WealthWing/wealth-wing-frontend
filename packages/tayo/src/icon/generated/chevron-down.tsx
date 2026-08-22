import { SVGProps } from 'react';
const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="m5 7.5 5 5 5-5"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgChevronDown;
