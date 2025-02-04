import { css } from '@emotion/react';

import { ButtonFormat, ButtonSize } from '../button/base.definitions';
import { Space, theme } from '../theme';

const buttonSvgSizes: Record<ButtonSize, Space> = {
	small: 's16',
	medium: 's16'
};

export const iconButton = (format: ButtonFormat, size: ButtonSize) => css`
	svg {
		font-size: ${theme.space[buttonSvgSizes[size]]};
	}

	padding: calc(
		${size === 'small' ? theme.space.s4 : theme.space.s10} -
			${format === 'outline' ? '1px' : '0px'}
	);
`;
