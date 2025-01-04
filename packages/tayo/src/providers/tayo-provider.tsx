import * as React from 'react';

import { darkTheme } from '../theme/dark-theme';
import { ThemeDefinitions } from '../theme/definitions';
import { RootStyle } from '../theme/root-style';

export interface ProviderProps {
	theme?: ThemeDefinitions;
	children: React.ReactNode;
}

export const TayoProvider = ({ theme = darkTheme, children }: ProviderProps) => {
	return (
		<>
			<RootStyle theme={theme} />
			{children}
		</>
	);
};
