import { css } from '@emotion/react';
import { CSSProperties, forwardRef } from 'react';

import { Color, FontKeys, theme } from '../theme';

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
	font?: FontKeys;
	textAlign?: CSSProperties['textAlign'];
	wordBreak?: CSSProperties['wordBreak'];
	whiteSpace?: CSSProperties['whiteSpace'];
	indent?: string;
	underline?: boolean;
	uppercase?: boolean;
};

export type TextProps = TextOptions & {
	children: React.ReactNode;
	tag?: TextTag;
	lines?: number;
};

const text = ({
	wordBreak,
	font,
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
		textAlign,
		wordBreak: wordBreak && wordBreak,
		paddingLeft: indent,
		whiteSpace: whiteSpace && whiteSpace,
		textDecoration: underline ? 'underline' : 'none',
		textTransform: uppercase ? 'uppercase' : 'none'
	});

export const Text = forwardRef<HTMLDivElement, TextProps>(
	({ id, children, lines, tag: Tag = 'div', ...textProps }, ref) => {
		return (
			<Tag id={id} ref={ref} css={[text(textProps), turnication(lines)]}>
				{children}
			</Tag>
		);
	}
);
