import { SVGProps } from 'react';

const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M32 4v8M16 4v8M6 20h36M10 8h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Z"
			stroke="currentColor"
			strokeWidth={4}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgCalendar;
