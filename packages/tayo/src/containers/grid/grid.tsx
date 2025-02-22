import * as React from 'react';

import { Space, theme } from '../../theme';

type GridProps = {
	children: React.ReactNode;
	gridTemplateColumns?: string;
	gap: Space;
	className?: string;
};

export const Grid = ({ children, gridTemplateColumns, gap, className }: GridProps) => {
	return (
		<div
			css={[
				{
					display: 'grid',
					gridTemplateColumns,
					gap: theme.space[gap],
					alignItems: 'center'
				}
			]}
			className={className}
		>
			{children}
		</div>
	);
};
