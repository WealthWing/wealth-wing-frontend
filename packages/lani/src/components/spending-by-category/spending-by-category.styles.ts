import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

const mobile = '@media screen and (max-width: 767px)';

export const spendingByCategory = {
	root: css`
		background: ${theme.color.cardBackground100};
		border: ${theme.border.default};
		border-radius: ${theme.borderRadius.radiusXLarge};
		color: ${theme.color.textPrimary};
		overflow: hidden;
	`,
	header: css`
		align-items: center;
		border-bottom: 1px solid ${theme.color.cardBackground80};
		display: flex;
		gap: ${theme.space.s16};
		justify-content: space-between;
		padding: ${theme.space.s20} ${theme.space.s24};

		${mobile} {
			align-items: stretch;
			flex-direction: column;
			padding: ${theme.space.s16};
		}
	`,
	headerSummary: css`
		align-items: flex-end;
		display: flex;
		flex: 0 0 auto;
		flex-direction: column;
		gap: ${theme.space.s2};
		text-align: right;

		${mobile} {
			align-items: flex-start;
			text-align: left;
		}
	`,
	headerSummaryValue: css`
		align-items: baseline;
		display: flex;
		gap: ${theme.space.s8};
	`,
	headerLoading: css`
		align-items: flex-end;
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s4};

		${mobile} {
			align-items: flex-start;
		}
	`,
	list: css`
		list-style: none;
		margin: 0;
		padding: 0;
	`,
	moreCategories: css`
		background: transparent;
		border: 0;
		border-radius: 0;
		border-top: 1px solid ${theme.color.cardBackground80};
	`,
	expandedList: css`
		margin: calc(-1 * ${theme.space.s16});
	`,
	row: css`
		align-items: center;
		border-bottom: 1px solid ${theme.color.cardBackground90};
		display: grid;
		gap: ${theme.space.s16};
		grid-template-areas: 'category progress amount percentage';
		grid-template-columns: minmax(12rem, 1fr) minmax(8rem, 1.4fr) minmax(6.75rem, auto) 3.25rem;
		min-height: ${theme.space.s64};
		padding: ${theme.space.s12} ${theme.space.s24};
		transition: background-color 160ms ease;

		:hover {
			background: color-mix(in srgb, ${theme.color.cardBackground80} 42%, transparent);
		}

		:last-child {
			border-bottom: 0;
		}

		${mobile} {
			gap: ${theme.space.s10} ${theme.space.s12};
			grid-template-areas:
				'category category category'
				'progress amount percentage';
			grid-template-columns: minmax(0, 1fr) auto 3rem;
			padding: ${theme.space.s12} ${theme.space.s16};
		}
	`,
	category: css`
		display: flex;
		flex-direction: column;
		grid-area: category;
		max-width: 100%;
		min-width: 0;
	`,
	categoryLabel: css`
		max-width: 100%;

		> span:last-child {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`,
	categoryTransactions: css`
		padding-left: calc(${theme.space.s40} + ${theme.space.s12});
	`,
	progress: css`
		grid-area: progress;
		min-width: 0;
	`,
	amount: css`
		font-variant-numeric: tabular-nums;
		grid-area: amount;
		justify-self: end;
		white-space: nowrap;
	`,
	percentage: css`
		color: ${theme.color.textSecondary};
		font-variant-numeric: tabular-nums;
		grid-area: percentage;
		justify-self: end;
		white-space: nowrap;
	`,
	state: css`
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s8};
		padding: ${theme.space.s40} ${theme.space.s20};
		text-align: center;
	`,
	stateIcon: css`
		align-items: center;
		background: color-mix(
			in srgb,
			${theme.color.primary80} 22%,
			${theme.color.cardBackground90}
		);
		border-radius: ${theme.borderRadius.radiusDefault};
		color: ${theme.color.primary40};
		display: inline-flex;
		height: ${theme.space.s40};
		justify-content: center;
		margin-bottom: ${theme.space.s4};
		width: ${theme.space.s40};
	`,
	stateDescription: css`
		max-width: 28rem;
	`,
	retry: css`
		margin-top: ${theme.space.s8};
	`,
	loadingCategory: css`
		align-items: center;
		display: flex;
		gap: ${theme.space.s12};
		grid-area: category;
		min-width: 0;
	`,
	loadingCategoryText: css`
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: ${theme.space.s4};
		min-width: 0;
	`,
	loadingProgress: css`
		grid-area: progress;
	`,
	loadingAmount: css`
		grid-area: amount;
		justify-self: end;
	`,
	loadingPercentage: css`
		grid-area: percentage;
		justify-self: end;
	`
};
