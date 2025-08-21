import { SVGProps } from 'react';

const SvgSwapVert = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		fill="currentColor"
		height="1em"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path d="M12.769 1.359a1.037 1.037 0 0 0-1.538 0l-5 6A1 1 0 0 0 7 9h10a1 1 0 0 0 .769-1.641ZM9.135 7 12 3.563 14.865 7ZM17 15H7a1 1 0 0 0-.769 1.641l5 6a1 1 0 0 0 1.538 0l5-6A1 1 0 0 0 17 15m-5 5.438L9.135 17h5.73Z" />
	</svg>
);
export default SvgSwapVert;
