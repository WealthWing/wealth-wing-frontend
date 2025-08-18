import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';
import { sidebarWidth } from 'components/sidebar.styles';

export const main = css`
	display: flex;
	flex-direction: column;
	float: right;
	gap: ${theme.space.s12};
	height: 98vh;
	margin-left: ${sidebarWidth};
	overflow: hidden;
	padding: 0 0 ${theme.space.s16} ${theme.space.s16};
	position: relative;
	scroll-behavior: smooth;
	width: calc(100% - ${sidebarWidth});
`;

export const Main = ({ children }: { children: React.ReactNode }) => (
	<main css={main}>{children}</main>
);
