import { Color } from '../theme/definitions';
import { iconMap, IconName } from './generated';
import { IconSize } from './icon.definitions';
import { icon, iconColor, spinAnimation } from './incon.styles';

type IconSvgProps = Pick<React.SVGAttributes<SVGSVGElement>, 'aria-hidden'>;

export type IconProps = IconSvgProps & {
	size?: IconSize;
	color?: Color;
	spin?: boolean;
	name: IconName;
};

export const Icon = ({ color, name, size, spin, ...rest }: IconProps) => {
	const IconComponent = iconMap[name];

	return (
		<IconComponent
			css={[icon(size), color && iconColor(color), spin && spinAnimation]}
			{...rest}
		/>
	);
};
