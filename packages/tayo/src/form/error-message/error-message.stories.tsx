import { Meta, StoryObj } from '@storybook/react';

import { FormControl } from '../form-control';
import { ErrorMessage } from './error-message';

const meta: Meta<typeof ErrorMessage> = {
	component: ErrorMessage,
	decorators: [
		function Component(Story, ctx) {
			return (
				<FormControl id="error-message">
					<Story {...ctx.args} />
				</FormControl>
			);
		}
	]
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
	args: {
		message: 'This is an error message'
	}
};
