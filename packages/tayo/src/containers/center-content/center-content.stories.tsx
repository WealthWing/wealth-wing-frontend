import { StoryFn } from '@storybook/react';

import { CenterContent, CenterContentProps } from './center-content';

export default {
	component: CenterContent,
	title: 'Design System/Containers/CenterContent'
};

export const Example: StoryFn<CenterContentProps> = (args) => (
	<CenterContent {...args}>
		<div>I&apos;m centered</div>
	</CenterContent>
);

Example.args = {
	height: '100%',
	width: 'auto'
};
