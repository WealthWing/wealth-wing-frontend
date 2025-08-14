import { SVGProps } from 'react';

export const Upload = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={98}
		height={98}
		viewBox="0 0 98 98"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<circle cx={49} cy={49} r={49} fill="#E9E9ED" />
		<path
			d="M67 55v8a4 4 0 0 1-4 4H35a4 4 0 0 1-4-4v-8m28-14L49 31m0 0L39 41m10-10v24"
			stroke="#4F4C6F"
			strokeWidth={4}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
