import { SVGProps } from 'react';

const SvgX = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 128 128"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M98.828 29.172a3.999 3.999 0 0 1 0 5.656l-64 64a3.999 3.999 0 1 1-5.656-5.656l64-64a4 4 0 0 1 5.656 0Z" />
		<path d="M29.172 29.172a4 4 0 0 1 5.656 0l64 64a3.999 3.999 0 0 1 0 5.656 3.999 3.999 0 0 1-5.656 0l-64-64a4 4 0 0 1 0-5.656Z" />
	</svg>
);
export default SvgX;
