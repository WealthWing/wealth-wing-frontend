import { css, CSSObject } from '@emotion/react';
import { forwardRef } from 'react';

import { Color, FontKeys, FontWeight, HeadingKeys, theme } from '../theme';

const mixinTextEllipsis = css`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const mixinTextClamping = (lines: number) => css`
	-webkit-box-orient: vertical;
	display: -webkit-box;
	-webkit-line-clamp: ${lines};
	overflow: hidden;
`;

const turnication = (lines?: number) => {
	if (!lines) return undefined;

	if (lines === 1) return mixinTextEllipsis;

	return mixinTextClamping(lines);
};

export type TextTag = 'div' | 'p' | 'span';

export type TextOptions = Pick<React.AllHTMLAttributes<HTMLElement>, 'id'> & {
	color?: Color;
	font?: FontKeys | HeadingKeys;
	fontWeight?: FontWeight;
	textAlign?: CSSObject['textAlign'];
	wordBreak?: CSSObject['wordBreak'];
	whiteSpace?: CSSObject['whiteSpace'];
	indent?: string;
	underline?: boolean;
	uppercase?: boolean;
};

export type TextProps = TextOptions & {
	children: React.ReactNode;
	tag?: TextTag;
	lines?: number;
	className?: string;
};

const text = ({
	wordBreak,
	font,
	fontWeight,
	indent,
	color = 'textPrimary',
	textAlign = 'left',
	underline,
	uppercase,
	whiteSpace
}: TextOptions) =>
	css({
		color: theme.color[color],
		font: font && theme.font[font],
		fontWeight: fontWeight && theme.fontWeight[fontWeight],
		textAlign,
		wordBreak: wordBreak && wordBreak,
		paddingLeft: indent,
		whiteSpace: whiteSpace && whiteSpace,
		textDecoration: underline ? 'underline' : 'none',
		textTransform: uppercase ? 'uppercase' : 'none'
	});

export const Text = forwardRef<HTMLDivElement, TextProps>(
	({ id, children, font = 'lg', lines, tag: Tag = 'div', className, ...textProps }, ref) => {
		return (
			<Tag
				id={id}
				ref={ref}
				className={className}
				css={[text({ font, ...textProps }), turnication(lines)]}
			>
				{children}
			</Tag>
		);
	}
);
