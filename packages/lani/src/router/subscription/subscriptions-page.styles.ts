import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';
import { headerHeight } from 'components/heading-container.styles';

export const subscriptionsPageStyles = {
	layout: css`
		display: grid;
		gap: ${theme.space.s16};
		grid-template-areas:
			'sidebar summary details'
			'sidebar table table';
		grid-template-columns: 280px minmax(0, 1fr) 420px;
		grid-template-rows: auto 1fr;
		height: calc(100% - ${headerHeight});
		min-height: 0;
		overflow: auto;
	`,
	sidebar: css`
		background-color: ${theme.color.cardBackground100};
		border-radius: ${theme.borderRadius.radiusDefault};
		box-shadow: ${theme.shadow.default200};
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s12};
		grid-area: sidebar;
		min-height: 0;
		padding: ${theme.space.s16};
		position: sticky;
		top: 0;
		z-index: 1;
	`,
	sidebarHeader: css`
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`,
	sidebarList: css`
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: ${theme.space.s12};
		min-height: 0;
	`,
	summary: css`
		background-color: ${theme.color.cardBackground100};
		border-radius: ${theme.borderRadius.radiusDefault};
		box-shadow: ${theme.shadow.default200};
		grid-area: summary;
		padding: ${theme.space.s16};
	`,
	summaryGrid: css`
		display: grid;
		gap: ${theme.space.s12};
		grid-template-columns: 1fr 1fr;
	`,
	summaryTile: css`
		align-items: center;
		background-color: ${theme.color.cardBackground80};
		border: 1px solid transparent;
		border-radius: ${theme.borderRadius.radiusMedium};
		box-shadow: ${theme.shadow.default100};
		display: flex;
		flex-direction: row;
		gap: ${theme.space.s8};
		justify-content: space-between;
		padding: ${theme.space.s20};
		transition: border-color 0.2s ease, transform 0.2s ease;
	`,
	summaryTileButton: css`
		cursor: pointer;
		text-align: left;
		width: 100%;

		&:hover {
			transform: translateY(-1px);
		}
	`,
	summaryTileActive: css`
		border-color: ${theme.color.primary60};
	`,
	table: css`
		grid-area: table;
		min-height: 0;
	`,
	details: css`
		background-color: ${theme.color.cardBackground100};
		border-radius: ${theme.borderRadius.radiusDefault};
		box-shadow: ${theme.shadow.default200};
		grid-area: details;
		min-height: 0;
		padding: ${theme.space.s16};
	`,
	detailsBody: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s12};
	`
};
