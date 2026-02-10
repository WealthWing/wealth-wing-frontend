import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const subscriptionCard = {
	root: css`
		background-color: ${theme.color.cardBackground80};
		border-radius: ${theme.borderRadius.radiusLarge};
		box-shadow: ${theme.shadow.default100};
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s4};
		padding: ${theme.space.s12};
		position: relative;
		transition: box-shadow 0.2s ease, transform 0.2s ease;
		width: 100%;

		&:hover {
			background-color: ${theme.color.cardBackground60};
		}
	`,
	container: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s10};
		list-style: none;
		margin: 0;
		padding: 0;
	`,
	cardButton: css`
		background: transparent;
		border: 0;
		cursor: pointer;
		margin: 1px;
		padding: 0;
		text-align: left;
		width: 99%;
	`,
	selected: css`
		background-color: ${theme.color.cardBackground60};
		box-shadow: 0 0 0 2px ${theme.color.primary60};
	`,
	ended: css`
		opacity: 0.6;
	`,
	metaRow: css`
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`,
	nameRow: css`
		align-items: center;
		display: flex;
		flex-direction: row;
		gap: ${theme.space.s8};
	`,
	pill: css`
		background-color: ${theme.color.darkBlue80};
		border-radius: ${theme.borderRadius.radiusLarge};
		padding: ${theme.space.s4} ${theme.space.s8};
	`
};
