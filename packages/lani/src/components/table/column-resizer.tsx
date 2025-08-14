import { resizer } from 'components/table/column-resizer.styles';
import React from 'react';

type ColumnResizerProps = {
	onResize: (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => void;
};

export const ColumnResizer = ({ onResize }: ColumnResizerProps) => (
	<div css={resizer} onMouseDown={onResize} onTouchStart={onResize} role="presentation" />
);
