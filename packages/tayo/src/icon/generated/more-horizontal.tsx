import { SVGProps } from 'react';

const SvgMoreHorizontal = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 128 128"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M56 64a8 8 0 1 1 16 0 8 8 0 0 1-16 0ZM93.333 64a8 8 0 1 1 16 0 8 8 0 0 1-16 0ZM18.667 64a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" />
	</svg>
);
export default SvgMoreHorizontal;
