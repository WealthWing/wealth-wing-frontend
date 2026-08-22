import { css } from '@emotion/react';

import { theme } from '../theme';

export const expand = {
	content: (isExpanded: boolean) => css`
		display: grid;
		grid-template-rows: ${isExpanded ? '1fr' : '0fr'};
		opacity: ${isExpanded ? 1 : 0};
		transition: grid-template-rows 200ms ease, opacity 160ms ease,
			visibility 0s linear ${isExpanded ? '0s' : '200ms'};
		visibility: ${isExpanded ? 'visible' : 'hidden'};

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	`,
	contentInner: css`
		min-height: 0;
		overflow: hidden;
	`,
	contentPanel: css`
		border-top: ${theme.border.default};
		padding: ${theme.space.s16};
	`,
	iconContainer: css`
		align-items: center;
		background-color: ${theme.color.cardBackground100};
		border-radius: ${theme.borderRadius.radiusMedium};
		display: flex;
		flex: 0 0 ${theme.space.s36};
		height: ${theme.space.s36};
		justify-content: center;
		width: ${theme.space.s36};
	`,
	root: css`
		background-color: ${theme.color.cardBackground90};
		border: ${theme.border.default};
		border-radius: ${theme.borderRadius.radiusMedium};
		overflow: hidden;
	`,
	row: css`
		align-items: center;
		background: transparent;
		color: ${theme.color.textPrimary};
		display: flex;
		gap: ${theme.space.s12};
		padding: ${theme.space.s12} ${theme.space.s16};
		text-align: left;
		width: 100%;

		&:hover {
			background-color: ${theme.color.cardBackground100};
		}

		&:focus-visible {
			outline: 2px solid ${theme.color.primary60};
			outline-offset: -2px;
		}
	`,
	text: css`
		display: flex;
		flex: 1 1 auto;
		flex-direction: column;
		gap: ${theme.space.s2};
		min-width: 0;
	`,
	title: css`
		font: ${theme.font.md};
	`,
	description: css`
		color: ${theme.color.textSecondary};
		font: ${theme.font.md};
	`
};
