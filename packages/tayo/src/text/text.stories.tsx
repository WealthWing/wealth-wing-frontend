import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta: Meta<typeof Text> = {
	component: Text
};

export default meta;
type Story = StoryObj<typeof Text>;

export const _Text: Story = {
	args: {
		children: 'Hello World'
	}
};
