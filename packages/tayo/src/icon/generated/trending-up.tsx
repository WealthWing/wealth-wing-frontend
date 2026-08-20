import { SVGProps } from 'react';

const SvgTrendingUp = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			d="m19.167 5-7.917 7.917L7.083 8.75.833 15m18.334-5V5h-5"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default SvgTrendingUp;
