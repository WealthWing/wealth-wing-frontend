import { SVGProps } from 'react';

const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M38 6H10a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4Z"
			stroke="currentColor"
			strokeWidth={4}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgSquare;
