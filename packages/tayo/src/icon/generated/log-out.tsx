import { SVGProps } from 'react';

const SvgLogOut = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M18 42h-8a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4h8m14 28 10-10m0 0L32 14m10 10H18"
			stroke="currentColor"
			strokeWidth={4}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgLogOut;
