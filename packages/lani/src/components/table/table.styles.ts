import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

const cellHeight = '3rem';

export const table = {
	header: css`
		> :first-of-type,
		> :first-of-type > button {
			border-radius: ${theme.border.default} 0 0 ${theme.border.default};
		}

		> :last-child,
		> :last-child > button {
			border-radius: 0 ${theme.border.default} ${theme.border.default} 0;
		}
	`,
	sticky: css`
		position: sticky;
		top: 0;
		z-index: 5;
	`,
	headerCell: css`
		background-color: ${theme.color.cardBackground80};
		border-bottom: 1px solid ${theme.color.cardBackground60};
		height: ${cellHeight};
		padding: ${theme.space.s10} ${theme.space.s16};
		position: relative;
		text-align: start;
		vertical-align: middle;
		white-space: nowrap;

		&:last-child {
			border-right: none;
		}
	`,
	rowLayout: (canClick?: boolean) => css`
		border-bottom: 1px solid ${theme.color.cardBackground90};
		cursor: ${canClick ? 'pointer' : 'default'};
		padding: ${theme.space.s8};

		:hover {
			background-color: ${canClick ? theme.color.cardBackground60 : undefined};
		}

		&:last-child {
			border-bottom: none;
		}
	`,
	selectedRow: css`
		background-color: ${theme.color.cardBackground60};
	`,
	cellContent: css`
		padding: ${theme.space.s10} ${theme.space.s16};
		vertical-align: middle;
		width: 100%;
	`,
	groupedDisplayHeader: css`
		align-items: center;
		display: flex;
		height: ${cellHeight};
		padding: ${theme.space.s16};
	`
};
