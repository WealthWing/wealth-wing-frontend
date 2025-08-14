import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
	component: Badge
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const SingleBadge: Story = {
	args: {
		children: 'Hello World'
	},
	render: (args) => <Badge {...args} />
};
