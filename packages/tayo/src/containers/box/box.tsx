import { css, SerializedStyles } from '@emotion/react';
import { CSSProperties } from 'react';

import { Border, BorderKey, Color, Shadow, SizeValue, Space, theme } from '../../theme';

export const boxTags = ['article', 'div', 'p', 'section', 'span', 'li'] as const;
export type BoxTag = (typeof boxTags)[number];

export type BoxOptions = {
	ariaLabelledBy?: string;
	backgroundColor?: Color;
	border?: Border;
	borderColor?: Color;
	borderRadius?: BorderKey;
	boxShadow?: Shadow;
	color?: Color;
	height?: SizeValue;
	margin?: Space;
	maxHeight?: SizeValue;
	maxWidth?: SizeValue;
	minHeight?: SizeValue;
	minWidth?: SizeValue;
	mb?: Space;
	ml?: Space;
	mr?: Space;
	mt?: Space;
	overflowX?: CSSProperties['overflowX'];
	overflowY?: CSSProperties['overflowY'];
	padding?: Space;
	pb?: Space;
	pl?: Space;
	pr?: Space;
	pt?: Space;
	tabIndex?: number;
	tag?: BoxTag;
	width?: SizeValue;
};

export const box = ({
	backgroundColor,
	border,
	borderColor,
	borderRadius,
	boxShadow,
	color,
	height,
	margin,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	mb,
	ml,
	mr,
	mt,
	overflowX,
	overflowY,
	padding,
	pb,
	pl,
	pr,
	pt,
	width
}: BoxOptions) =>
	css({
		backgroundColor: backgroundColor && theme.color[backgroundColor],
		border: border && theme.border[border],
		borderColor: border && borderColor && theme.color[borderColor],
		borderRadius:
			(borderRadius && theme.borderRadius[borderRadius]) ||
			(border && theme.borderRadius.radiusDefault),
		boxShadow: boxShadow && theme.shadow[boxShadow],
		color: color && theme.color[color],
		height,
		margin: margin && theme.space[margin],
		marginBottom: mb && theme.space[mb],
		marginLeft: ml && theme.space[ml],
		marginRight: mr && theme.space[mr],
		marginTop: mt && theme.space[mt],
		maxHeight,
		maxWidth,
		minHeight,
		minWidth,
		overflowX: overflowX && overflowX,
		overflowY: overflowY && overflowY,
		padding: padding && theme.space[padding],
		paddingBottom: pb && theme.space[pb],
		paddingLeft: pl && theme.space[pl],
		paddingRight: pr && theme.space[pr],
		paddingTop: pt && theme.space[pt],
		width
	});

export type BoxProps = BoxOptions &
	Pick<React.AllHTMLAttributes<HTMLElement>, 'id' | 'style'> & {
		children: React.ReactNode;
		_css?: SerializedStyles;
		className?: string;
	};

export const Box = ({
	ariaLabelledBy,
	children,
	id,
	tabIndex,
	tag: Tag = 'div',
	className,
	_css,
	style,
	...boxProps
}: BoxProps) => (
	<Tag
		aria-labelledby={ariaLabelledBy}
		id={id}
		style={style}
		css={[box(boxProps), _css && _css]}
		tabIndex={tabIndex}
		className={className}
	>
		{children}
	</Tag>
);
