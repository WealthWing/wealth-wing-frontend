import * as React from 'react';

import { SizeValue } from '../../theme';
import { centerContent } from './center-content.styles';

export interface CenterContentProps {
	height?: SizeValue | 'auto';
	width?: SizeValue | 'auto';
}

export const CenterContent = ({
	height = '100%',
	width = 'auto',
	children
}: React.PropsWithChildren<CenterContentProps>) => {
	return (
		<div css={centerContent} style={{ height, width }}>
			{children}
		</div>
	);
};
