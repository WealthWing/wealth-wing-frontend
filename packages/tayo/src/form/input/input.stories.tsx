import type { Meta, StoryObj } from '@storybook/react';

import { FormControl } from '../form-control';
import { Label } from '../label/label';
import { Input } from './input';

const meta: Meta<typeof Input> = {
	component: Input
};

export default meta;

type Story = StoryObj<typeof Input>;

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
export const _Input: Story = {
	args: {
		placeholder: 'Placeholder'
	},
	decorators: [
		function Component(Story, ctx) {
			return (
				<FormControl label="Label" {...ctx.args}>
					<Input placeholder="Placeholder Text" />
				</FormControl>
			);
		}
	]
};
