import type { Meta, StoryObj } from '@storybook/react';

import { FormControl } from './form-control';
import { Input } from './input/input';

const meta: Meta<typeof FormControl> = {
	component: FormControl
};

export default meta;

type Story = StoryObj<typeof FormControl>;

export const WithInput: Story = {
	args: {
		label: 'Label',
		children: <Input placeholder="Placeholder Text" />
	}
};
export const WithInputError: Story = {
	args: {
		label: 'Label',
		error: 'Error Message',
		children: <Input placeholder="Placeholder Text" />
	}
};
