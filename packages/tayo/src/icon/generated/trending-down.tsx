import { SVGProps } from 'react';
const SvgTrendingDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#trending_down_svg__a)">
			<path
				d="M19.167 15 11.25 7.083 7.083 11.25.833 5m18.334 5v5h-5"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="trending_down_svg__a">
				<path fill="#fff" d="M0 0h20v20H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgTrendingDown;
