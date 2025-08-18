import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';
import { headerHeight } from 'components/heading-container.styles';

export const contentArea = {
	area: css`
		display: grid;
		gap: ${theme.space.s24};
		grid-template-columns: 1fr auto;
		height: calc(100% - ${headerHeight});
		min-height: 0;
	`,
	centerScroll: css`
		min-height: 0;
		overflow: auto;
	`
};
