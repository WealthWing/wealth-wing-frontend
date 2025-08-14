import React from 'react';

import { buttonStylesConfig } from '../button';
import { Icon, IconName } from '../icon';
import { Color, theme } from '../theme';
import { BadgeVariant } from './badge.definitions';
import { badge } from './badge.styles';

export type BadgeProps = {
	backgroundColor?: Color;
	children: React.ReactNode;
	color?: Color;
	leftIcon?: IconName;
	rightIcon?: IconName;
	badgeVariant?: BadgeVariant;
};

function getBadgeColors({
	color,
	backgroundColor,
	badgeVariant
}: {
	color?: Color;
	backgroundColor?: Color;
	badgeVariant?: BadgeVariant;
}) {
	if (color && backgroundColor) {
		return {
			color: theme.color[color],
			backgroundColor: theme.color[backgroundColor]
		};
	}
	if (badgeVariant && buttonStylesConfig[badgeVariant]) {
		const variantStyles = buttonStylesConfig[badgeVariant];
		return {
			color: variantStyles.regular.color,
			backgroundColor: variantStyles.regular.background
		};
	}
	return {
		color: color ? theme.color[color] : undefined,
		backgroundColor: backgroundColor ? theme.color[backgroundColor] : undefined
	};
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
	(
		{
			backgroundColor,
			children,
			color,
			leftIcon,
			rightIcon,
			badgeVariant = 'secondary'
		}: BadgeProps,
		ref
	) => {
		const { color: resolvedColor, backgroundColor: resolvedBackgroundColor } = getBadgeColors({
			badgeVariant,
			color,
			backgroundColor
		});

		return (
			<span
				css={[
					badge,
					{
						color: resolvedColor,
						backgroundColor: resolvedBackgroundColor
					}
				]}
				ref={ref}
			>
				{leftIcon && <Icon name={leftIcon} size="s12" />}
				{children}
				{rightIcon && <Icon name={rightIcon} size="s12" />}
			</span>
		);
	}
);
