import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';
import { sidebarWidth } from 'components/sidebar.styles';

export const main = css`
	gap: ${theme.space.s12};
	width: calc(100% - ${sidebarWidth});
	height: 100%;
	overflow-y: auto;
	padding: ${theme.space.s16};
	scroll-behavior: smooth;
	display: block;
	position: relative;
	float: right;
`;

export const Main = ({ children }: { children: React.ReactNode }) => (
	<main css={main}>{children}</main>
);
