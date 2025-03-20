import { css, SerializedStyles } from '@emotion/react';

import { zIndex } from '../constants';
import { theme } from '../theme';
import { ModalVariant } from './modal.definitions';

export const modalOverlayColor = 'rgba(0, 0, 0, 0.25)';
const slideModalWidth = '30rem';

export const modal = {
	root: css`
		display: flex;
		height: 100vh;
		justify-content: center;
		position: fixed;
		top: 0;
		z-index: ${zIndex.modal};
	`,
	overlay: css`
		background-color: ${modalOverlayColor};
		height: 100vh;
		left: 0;
		position: fixed;
		top: 0;
		width: 100vw;
		z-index: ${zIndex.modalOverlay};
	`,
	modalWithOverlay: css`
		left: 0;
		width: 100vw;
	`,
	modalNoOverlay: css`
		right: 0;
		width: ${slideModalWidth};
	`,
	modal: css`
		background-color: ${theme.color.cardBackground100};
		border-radius: ${theme.border.default};
		box-shadow: ${theme.shadow.default300};
		color: ${theme.color.textPrimary};
		display: flex;
		flex-direction: column;
	`,
	body: css`
		flex-grow: 1;
		overflow-y: auto;
		padding: 0 ${theme.space.s16} ${theme.space.s16} ${theme.space.s16};
	`,
	footer: css`
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: ${theme.space.s16};
	`,
	floating: css`
		bottom: 0;
		max-height: calc(100vh - 2 * ${theme.space.s16});
		max-width: calc(100vw - 2 * ${theme.space.s16});
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	`
};

export const modalVariants: Record<ModalVariant, SerializedStyles> = {
	floatinglarge: css`
		height: 60rem;
		width: 70rem;
	`,
	floatingmedium: css`
		height: 45rem;
		width: 60rem;
	`,
	floatingsmall: css`
		height: 20rem;
		width: 40rem;
	`,
	slideleft: css`
		border-radius: 0;
		height: 100%;
		position: absolute;
		right: 0;
		width: ${slideModalWidth};
	`,
	fullscreen: css`
		bottom: 0;
		height: calc(100vh - ${theme.space.s16});
		margin-top: ${theme.space.s16};
		width: calc(100vw - 2 * ${theme.space.s16});
	`
};
