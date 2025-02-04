import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './icon-button';

const meta: Meta<typeof IconButton> = {
	component: IconButton
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	args: {
		variant: 'primary',
		format: 'regular',
		size: 'medium',
		iconName: 'calendar'
	}
};
