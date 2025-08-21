import { SVGProps } from 'react';

const SvgMoreVertical = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 128 128"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M56 64a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" />
		<path d="M64 30.667a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#C4C4C4" />
		<path d="M56 26.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0ZM56 101.333a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" />
	</svg>
);
export default SvgMoreVertical;
