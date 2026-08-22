import { css } from '@emotion/react';
import * as React from 'react';

import { Icon, type IconName } from '../icon';
import { Text } from '../text';
import { Border, BorderKey, Color, FontKeys, HeadingKeys, SizeValue, Space, theme } from '../theme';

type KpiCardFont = FontKeys | HeadingKeys;
type KpiCardBackground = Color | 'transparent';

const resolveBackgroundColor = (
	backgroundColor: KpiCardBackground | undefined,
	fallback?: Color
) => {
	if (backgroundColor === 'transparent') return 'transparent';
	if (backgroundColor) return theme.color[backgroundColor];

	return fallback ? theme.color[fallback] : undefined;
};

export type KpiCardProps = {
	/** The primary metric label, such as "Net spending" or "Income". */
	label: React.ReactNode;
	/** The primary metric value. */
	value: React.ReactNode;
	/** Optional contextual copy displayed below the value. */
	supportingText?: React.ReactNode;
	/** Optional Tayo icon displayed in the leading icon container. */
	icon?: IconName;
	backgroundColor?: KpiCardBackground;
	border?: Border;
	borderColor?: Color;
	gap?: Space;
	iconBackgroundColor?: KpiCardBackground;
	iconBorderColor?: Color;
	iconContainerBorderRadius?: BorderKey;
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
	labelFont?: KpiCardFont;
	labelUppercase?: boolean;
	orientation?: 'horizontal' | 'vertical';
	padding?: Space;
	supportingTextColor?: Color;
	supportingTextFont?: KpiCardFont;
	valueColor?: Color;
	valueFont?: KpiCardFont;
};

const card = ({
	backgroundColor,
	border,
	borderColor,
	borderRadius,
	gap,
	orientation,
	padding
}: Pick<
	KpiCardProps,
	| 'backgroundColor'
	| 'border'
	| 'borderColor'
	| 'borderRadius'
	| 'gap'
	| 'orientation'
	| 'padding'
>) =>
	css({
		alignItems: orientation === 'vertical' ? 'flex-start' : 'center',
		backgroundColor: resolveBackgroundColor(backgroundColor, 'cardBackground100'),
		border: border ? theme.border[border] : undefined,
		borderColor: border && borderColor ? theme.color[borderColor] : undefined,
		borderRadius: theme.borderRadius[borderRadius ?? 'radiusXLarge'],
		display: 'flex',
		flexDirection: orientation === 'vertical' ? 'column' : 'row',
		gap: theme.space[gap ?? 's20'],
		padding: theme.space[padding ?? 's20']
	});

const iconContainer = ({
	iconBackgroundColor,
	iconBorderColor,
	iconContainerBorderRadius,
	iconContainerSize
}: Pick<
	KpiCardProps,
	'iconBackgroundColor' | 'iconBorderColor' | 'iconContainerBorderRadius' | 'iconContainerSize'
>) =>
	css({
		alignItems: 'center',
		backgroundColor: resolveBackgroundColor(iconBackgroundColor),
		border: iconBorderColor ? `1px solid ${theme.color[iconBorderColor]}` : undefined,
		borderRadius: iconContainerBorderRadius
			? theme.borderRadius[iconContainerBorderRadius]
			: '50%',
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
	gap,
	icon,
	iconBackgroundColor,
	iconBorderColor,
	iconColor = 'primary60',
	iconContainerBorderRadius,
	iconContainerSize,
	iconSize = 's32',
	label,
	labelColor = 'textSecondary',
	labelFont = 'lg',
	labelUppercase = true,
	orientation = 'horizontal',
	padding,
	supportingText,
	supportingTextColor = 'textSecondary',
	supportingTextFont = 'lg',
	value,
	valueColor = 'textPrimary',
	valueFont = 'h2'
}: KpiCardProps) => {
	return (
		<div
			className={className}
			css={card({
				backgroundColor,
				border,
				borderColor,
				borderRadius,
				gap,
				orientation,
				padding
			})}
		>
			{icon && (
				<div
					css={iconContainer({
						iconBackgroundColor,
						iconBorderColor,
						iconContainerBorderRadius,
						iconContainerSize
					})}
					aria-hidden="true"
				>
					<Icon color={iconColor} name={icon} size={iconSize} />
				</div>
			)}
			<div css={content}>
				<div css={textStack}>
					<Text color={labelColor} font={labelFont} uppercase={labelUppercase}>
						{label}
					</Text>
					<Text color={valueColor} font={valueFont}>
						{value}
					</Text>
					{supportingText && (
						<Text color={supportingTextColor} font={supportingTextFont}>
							{supportingText}
						</Text>
					)}
				</div>
			</div>
		</div>
	);
};
