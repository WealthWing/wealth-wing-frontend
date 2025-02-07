import React from 'react';

import { box, BoxProps } from '../containers';
import { HeadingKeys, theme } from '../theme';
import { heading } from './heading.styles';

export const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type HeadingTag = (typeof headingTags)[number];

export type HeadingProps = Pick<BoxProps, 'color' | 'id'> & {
	font?: HeadingKeys;
	tag: HeadingTag;
	children: React.ReactNode;
};

export const Heading = ({ tag: Tag, color = 'textPrimary', font, id, children }: HeadingProps) => {
	return (
		<Tag
			id={id}
			css={[heading, box({ color }), { font: font ? theme.font[font] : theme.font[Tag] }]}
		>
			{children}
		</Tag>
	);
};
