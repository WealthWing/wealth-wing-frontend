import { css } from '@emotion/react';

import { Space, theme } from '../theme';

export const keyValue = (gap: Space) =>
	css({
		display: 'flex',
		flexDirection: 'column',
		gap: theme.space[gap]
	});
