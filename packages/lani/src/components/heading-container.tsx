import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';
import React from 'react';

const container = css({
	backgroundColor: theme.color.cardBackground90,
	padding: theme.space.s16,
	position: 'sticky',
	top: 0,
	width: '100%'
});

type HeadingContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export const HeadingContainer = ({ children, className }: HeadingContainerProps) => {
	return (
		<div css={container} className={className}>
			{children}
		</div>
	);
};
