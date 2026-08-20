import { css } from '@emotion/react';
import * as React from 'react';

import { Icon, type IconName } from '../icon';
import { Text } from '../text';
import { Border, Color, SizeValue, Space, theme } from '../theme';

export type KpiCardProps = {
	/** The primary metric label, such as "Net spending" or "Income". */
	label: React.ReactNode;
	/** The primary metric value. */
	value: React.ReactNode;
	/** Optional contextual copy displayed below the value. */
	supportingText?: React.ReactNode;
	/** Optional Tayo icon displayed in the leading icon container. */
	icon?: IconName;
	backgroundColor?: Color;
	border?: Border;
	borderColor?: Color;
	iconBorderColor?: Color;
	borderRadius?:
		| 'radiusDefault'
		| 'radiusLarge'
		| 'radiusMedium'
		| 'radiusSmall'
		| 'radiusXLarge';
	className?: string;
	iconColor?: Color;
	iconContainerSize?: SizeValue;
	iconSize?: Space;
	labelColor?: Color;
	padding?: Space;
	supportingTextColor?: Color;
	valueColor?: Color;
};

const card = ({
	backgroundColor,
	border,
	borderColor,
	borderRadius,
	padding
}: Pick<KpiCardProps, 'backgroundColor' | 'border' | 'borderColor' | 'borderRadius' | 'padding'>) =>
	css({
		alignItems: 'center',
		backgroundColor: theme.color[backgroundColor ?? 'cardBackground100'],
		border: border ? theme.border[border] : undefined,
		borderColor: border && borderColor ? theme.color[borderColor] : undefined,
		borderRadius: theme.borderRadius[borderRadius ?? 'radiusXLarge'],
		display: 'flex',
		gap: theme.space.s20,
		padding: theme.space[padding ?? 's20']
	});

const iconContainer = ({
	iconBorderColor,
	iconContainerSize
}: Pick<KpiCardProps, 'iconBorderColor' | 'iconContainerSize'>) =>
	css({
		alignItems: 'center',
		border: iconBorderColor ? `1px solid ${theme.color[iconBorderColor]}` : undefined,
		borderRadius: '50%',
		display: 'flex',
		flex: '0 0 auto',
		height: iconContainerSize ?? '4rem',
		justifyContent: 'center',
		width: iconContainerSize ?? '4rem'
	});

const content = css({
	minWidth: 0
});

const textStack = css({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.space.s2
});

/**
 * A compact metric summary card with a leading icon and a three-level text hierarchy.
 */
export const KpiCard = ({
	backgroundColor,
	border,
	borderColor,
	borderRadius,
	className,
	icon,
	iconBorderColor,
	iconColor = 'primary60',
	iconContainerSize,
	iconSize = 's32',
	label,
	labelColor = 'textSecondary',
	padding,
	supportingText,
	supportingTextColor = 'textSecondary',
	value,
	valueColor = 'textPrimary'
}: KpiCardProps) => {
	return (
		<div
			className={className}
			css={card({ backgroundColor, border, borderColor, borderRadius, padding })}
		>
			{icon && (
				<div css={iconContainer({ iconBorderColor, iconContainerSize })} aria-hidden="true">
					<Icon color={iconColor} name={icon} size={iconSize} />
				</div>
			)}
			<div css={content}>
				<div css={textStack}>
					<Text color={labelColor} font="lg" uppercase>
						{label}
					</Text>
					<Text color={valueColor} font="h2">
						{value}
					</Text>
					{supportingText && (
						<Text color={supportingTextColor} font="lg">
							{supportingText}
						</Text>
					)}
				</div>
			</div>
		</div>
	);
};
