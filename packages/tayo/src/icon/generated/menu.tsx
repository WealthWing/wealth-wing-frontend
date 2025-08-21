import { SVGProps } from 'react';

const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 128 128"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M12 64a4 4 0 0 1 4-4h96a4 4 0 0 1 0 8H16a4 4 0 0 1-4-4ZM12 32a4 4 0 0 1 4-4h96a4 4 0 0 1 0 8H16a4 4 0 0 1-4-4ZM12 96a4 4 0 0 1 4-4h96a4 4 0 0 1 0 8H16a4 4 0 0 1-4-4Z" />
	</svg>
);
export default SvgMenu;
