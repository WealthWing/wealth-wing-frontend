import * as React from 'react';

import { Space, theme } from '../../theme';

type GridProps = {
	children: React.ReactNode;
	gridTemplateColumns?: string;
	gap: Space;
};

export const Grid = ({ children, gridTemplateColumns, gap }: GridProps) => {
	return (
		<div css={{ display: 'grid', gridTemplateColumns, gap: theme.space[gap] }}>{children}</div>
	);
};
