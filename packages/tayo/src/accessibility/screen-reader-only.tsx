import * as React from 'react';

import { screenReaderOnly } from './screen-reader-only.styles';

export type ScreenReaderOnlyProps = {
	children: React.ReactNode;
};

export const ScreenReaderOnly = ({ children }: ScreenReaderOnlyProps) => (
	<span css={screenReaderOnly}>{children}</span>
);
