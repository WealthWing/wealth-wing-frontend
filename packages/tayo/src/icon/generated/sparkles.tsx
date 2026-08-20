import { SVGProps } from 'react';

const SvgSparkles = (props: SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
		<path
			d="M12 2.75C12.58 7.68 14.32 9.42 19.25 10C14.32 10.58 12.58 12.32 12 17.25C11.42 12.32 9.68 10.58 4.75 10C9.68 9.42 11.42 7.68 12 2.75Z"
			fill="currentColor"
		/>
		<path
			d="M19 15.5C19.23 17.48 19.02 17.27 21 17.5C19.02 17.73 19.23 17.52 19 19.5C18.77 17.52 18.98 17.73 17 17.5C18.98 17.27 18.77 17.48 19 15.5Z"
			fill="currentColor"
		/>
		<path
			d="M5 3.5C5.17 4.96 5.04 4.83 6.5 5C5.04 5.17 5.17 5.04 5 6.5C4.83 5.04 4.96 5.17 3.5 5C4.96 4.83 4.83 4.96 5 3.5Z"
			fill="currentColor"
		/>
	</svg>
);

export default SvgSparkles;

