import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const PANEL_WIDTH = 300;

export const pageRightPanel = {
	root: css`
		align-self: start;
		background: ${theme.color.cardBackground100};
		border-radius: ${theme.borderRadius.radiusDefault};
		box-shadow: ${theme.shadow.default200};
		contain: inline-size paint;
		height: 100%;
		max-height: calc(100dvh - var(--header-h) - ${theme.space.s16});
		min-width: 0;
		overflow: auto;
		overscroll-behavior: contain;
		padding: 0;
		position: sticky;
		top: var(--header-h);
		transition: width 0.25s ease, padding 0.25s ease, box-shadow 0.25s ease;
		width: 0;
	`,
	open: css`
		padding: ${theme.space.s20};
		width: ${PANEL_WIDTH}px;
	`,
	closed: css`
		box-shadow: none;
		overflow: hidden;
		padding: 0;
		width: 0;
	`
};
