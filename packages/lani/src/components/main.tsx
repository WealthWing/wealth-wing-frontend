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

const fullWidthMobile = css`
	@media screen and (max-width: 599px) {
		height: calc(100dvh - ${theme.space.s24});
		margin-left: 0;
		padding: 0;
		width: 100%;
	}
`;

type MainProps = {
	children: React.ReactNode;
	fullWidthOnMobile?: boolean;
};

export const Main = ({ children, fullWidthOnMobile = false }: MainProps) => (
	<main css={[main, fullWidthOnMobile && fullWidthMobile]}>{children}</main>
);
