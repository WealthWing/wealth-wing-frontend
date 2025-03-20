import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';
import React from 'react';

export const container = css({
	backgroundColor: theme.color.cardBackground90,
	paddingBottom: theme.space.s16,
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
