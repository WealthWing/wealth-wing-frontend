import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../packages/tayo/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-links'],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript'
	}
};

export default config;
