import { SVGProps } from 'react';
const SvgSvgviewerOutput = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 15 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M.5 3.5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H3m-2.5 0v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1H3m-2.5 0H3m6 6h3"
			stroke="currentColor"
		/>
	</svg>
);
export default SvgSvgviewerOutput;
