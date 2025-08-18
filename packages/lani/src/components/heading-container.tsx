import { headingContainer } from 'components/heading-container.styles';
import React from 'react';

type HeadingContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export const HeadingContainer = ({ children, className }: HeadingContainerProps) => {
	return (
		<div css={headingContainer} className={className}>
			{children}
		</div>
	);
};
