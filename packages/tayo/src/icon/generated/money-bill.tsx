import { SVGProps } from 'react';

const SvgMoneyBill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		id="money-bill_svg__Icons"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		xmlSpace="preserve"
		width="1em"
		height="1em"
		{...props}
	>
		<style>
			{
				'.money-bill_svg__st0{fill:none;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}'
			}
		</style>
		<path className="money-bill_svg__st0" d="M3 9h26v14H3z" />
		<circle className="money-bill_svg__st0" cx={16} cy={16} r={4} />
		<path
			className="money-bill_svg__st0"
			d="M7 9c0 2.2-1.8 4-4 4m0 6c2.2 0 4 1.8 4 4M25 9c0 2.2 1.8 4 4 4m0 6c-2.2 0-4 1.8-4 4"
		/>
		<path
			style={{
				fill: 'none'
			}}
			d="M-432-144h536v680h-536z"
		/>
	</svg>
);
export default SvgMoneyBill;
