import { contentArea } from 'components/content-area.styles';
import React from 'react';

type ContentAreaProps = {
	children: React.ReactNode;
};

export const ContentArea = ({ children }: ContentAreaProps) => (
	<section css={contentArea.area}>{children}</section>
);

export type ContentScrollProps = {
	children: React.ReactNode;
};
export const ContentScroll = ({ children }: ContentScrollProps) => (
	<div css={contentArea.centerScroll}>{children}</div>
);
