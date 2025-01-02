import type { Preview } from '@storybook/react';
import { TayoProvider, darkTheme, ThemeDefinitions, lightTheme, theme } from '../packages/tayo/src';
import * as React from 'react';

const themeMap: Record<string, ThemeDefinitions> = {
	darkTheme,
	lightTheme
};

const withThemeProvider = (Story, context) => {
	return (
		<TayoProvider
			theme={context.globals.theme ? themeMap[context.globals.theme] : themeMap.ruthi}
		>
			<Story />
		</TayoProvider>
	);
};

const preview: Preview = {
	globalTypes: {
		theme: {
			description: 'Global theme for components',
			toolbar: {
				title: 'Theme',
				icon: 'paintbrush',
				items: ['darkTheme', 'lightTheme'],
				dynamicTitle: true
			}
		}
	},
	decorators: [withThemeProvider],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			values: [
				{ name: 'Dark', value: '#231F4B' },
				{ name: 'Light', value: '#F7F9F2' }
			],
			default: 'Dark'
		}
	}
};

export default preview;
