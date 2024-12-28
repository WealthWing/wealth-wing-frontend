import * as React from 'react';
import { ThemeDefinitions } from '../theme/definitions';
import { RootStyle } from '../theme/root-style';
import { darkTheme } from '../theme/dark-theme';

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
