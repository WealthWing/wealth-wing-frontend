import type { Meta, StoryObj } from '@storybook/react';

import { Expand } from './expand';

const meta: Meta<typeof Expand> = {
	component: Expand,
	args: {
		children: 'Expanded content is displayed here.',
		description: 'Averages, calculation and more',
		icon: 'list',
		title: 'View more details'
	}
};

export default meta;
type Story = StoryObj<typeof Expand>;

export const Default: Story = {};

export const Expanded: Story = {
	args: {
		defaultExpanded: true
	}
};

export const WithoutLeadingIcon: Story = {
	args: {
		icon: undefined,
		title: 'Additional details'
	}
};
