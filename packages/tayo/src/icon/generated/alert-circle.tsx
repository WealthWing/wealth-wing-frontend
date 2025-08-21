import { SVGProps } from 'react';

const SvgAlertCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 128 128"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		{...props}
	>
		<path d="M64 14.667c-27.246 0-49.333 22.087-49.333 49.333S36.754 113.333 64 113.333 113.333 91.246 113.333 64 91.246 14.667 64 14.667ZM6.667 64C6.667 32.336 32.336 6.667 64 6.667c31.664 0 57.333 25.669 57.333 57.333 0 31.664-25.669 57.333-57.333 57.333-31.664 0-57.333-25.669-57.333-57.333Z" />
		<path d="M64 38.667a4 4 0 0 1 4 4V64a4 4 0 0 1-8 0V42.667a4 4 0 0 1 4-4ZM60 85.333a4 4 0 0 1 4-4h.053a4 4 0 1 1 0 8H64a4 4 0 0 1-4-4Z" />
	</svg>
);
export default SvgAlertCircle;
