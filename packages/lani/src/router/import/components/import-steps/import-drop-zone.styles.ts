import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const dropZone = {
	root: css`
		align-items: center;
		border: 2px dashed ${theme.color.indigo40};
		border-radius: ${theme.borderRadius.radiusMedium};
		cursor: pointer;
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: ${theme.space.s16};
		height: 100%;
		justify-content: center;
		outline: none;
		padding: ${theme.space.s24};
		transition: border-color 0.2s, background 0.2s;
		width: 100%;
	`,
	dragged: css`
		background-color: ${theme.color.cardBackground60};
		border-color: ${theme.color.black20};
	`
};
