import type { Meta, StoryObj } from '@storybook/react';

import { KeyValue } from './key-value';

const meta: Meta<typeof KeyValue> = {
	component: KeyValue
};

export default meta;
type Story = StoryObj<typeof KeyValue>;

export const Default: Story = {
	args: {
		label: 'Net spending',
		value: '$4,238.16'
	}
};

export const AccentValue: Story = {
	args: {
		label: 'Gross spending',
		textAlign: 'center',
		value: '$4,586.36',
		valueColor: 'secondary60'
	}
};
