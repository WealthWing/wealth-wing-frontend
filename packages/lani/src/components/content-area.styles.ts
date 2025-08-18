import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';
import { headerHeight } from 'components/heading-container.styles';

export const contentArea = {
	area: css`
		display: grid;
		gap: ${theme.space.s16};
		grid-template-columns: 1fr auto;
		height: calc(100% - ${headerHeight});
		min-height: 0;
	`,
	centerScroll: css`
		display: flex;
		flex-direction: column;
		gap: ${theme.space.s16};
		min-height: 0;
		overflow: auto;
	`
};
