import type { Meta, StoryObj } from '@storybook/react';

import { FormControl } from '../form-control';
import { TextArea } from './textarea';

const meta: Meta<typeof TextArea> = {
	component: TextArea
};

export default meta;

type Story = StoryObj<typeof TextArea>;

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
export const _TextArea: Story = {
	args: {
		placeholder: 'Placeholder',
		lines: 4
	},
	decorators: [
		function Component(_, ctx) {
			return (
				<FormControl label="Label">
					<TextArea placeholder="Placeholder Text" {...ctx.args} />
				</FormControl>
			);
		}
	]
};
