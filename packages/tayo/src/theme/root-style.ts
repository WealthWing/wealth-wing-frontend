import { ThemeDefinitions } from './definitions';
import { reset, normalize } from './global-styles';
import * as React from 'react';

type ThemeCategory = keyof ThemeDefinitions;

export const getThemeKeyString = (category: ThemeCategory, prop: string) =>
	`--ww-t-${category}-${prop}`;

const getAllCSSVariables = (theme: ThemeDefinitions) => {
	const categories = Object.keys(theme) as ThemeCategory[];
	const cssVariablesString = categories
		.map((category) => {
			// TO DO: more specific type/remove coersion?
			const categoryValue = theme[category] as Record<string, string>;
			const categoryKeys = Object.keys(categoryValue);

			return categoryKeys
				.map((categoryKey) => {
					return `${getThemeKeyString(category, categoryKey)}: ${
						categoryValue[categoryKey]
					};`;
				})
				.join('\r\n');
		})
		.join('\r\n');

	return cssVariablesString;
};

const themeId = 'ww-theme';

export function changeTheme(theme: ThemeDefinitions) {
	const hasRootStyle = document.head.querySelector('style[ww="css-root"]');
	if (!hasRootStyle) {
		const style = document.createElement('style');
		style.setAttribute('ww', 'css-root');
		document.head.append(style);
	}

	const rootStyleSheet = document.head.querySelector('style[ww="css-root"]');
	if (rootStyleSheet) {
		const rootCss = `:root {
          ${getAllCSSVariables(theme)}
        }
         ${reset}
		 ${normalize}  
        `;
		rootStyleSheet.textContent = `${rootCss}`;
	}
}

interface RootStyleProps {
	theme: ThemeDefinitions;
}

export const RootStyle = ({ theme }: RootStyleProps) => {
	React.useEffect(() => {
		changeTheme(theme);
	}, [theme]);

	return null;
};
