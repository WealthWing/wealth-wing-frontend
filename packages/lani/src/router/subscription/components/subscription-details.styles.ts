import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const subscriptionDetailsStyles = {
	container: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s16};
		margin-top: ${theme.space.s12};
	`,
	statCard: css`
		background-color: ${theme.color.cardBackground80};
		border-radius: ${theme.borderRadius.radiusMedium};
		box-shadow: ${theme.shadow.default100};
		padding: ${theme.space.s16};
		transition: transform 0.2s ease, box-shadow 0.2s ease;

		&:hover {
			box-shadow: ${theme.shadow.default200};
			transform: translateY(-1px);
		}
	`,
	iconContainer: css`
		align-items: center;
		background-color: ${theme.color.cardBackground60};
		border-radius: ${theme.borderRadius.radiusSmall};
		display: flex;
		height: 48px;
		justify-content: center;
		width: 48px;
	`,
	emptyState: css`
		align-items: center;
		display: flex;
		justify-content: center;
		margin-top: ${theme.space.s12};
		padding: ${theme.space.s24};
	`
};
