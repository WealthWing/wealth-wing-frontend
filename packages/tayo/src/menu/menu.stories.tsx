import type { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuItem } from './menu';

const meta: Meta<typeof Menu> = {
	component: Menu
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const SingleWithButtons: Story = {
	args: {
		id: 'menu',
		children: (
			<>
				<MenuItem onClick={() => alert('Clicked')}>Item 1</MenuItem>
				<MenuItem onClick={() => alert('Clicked')}>Item 2</MenuItem>
				<MenuItem onClick={() => alert('Clicked')}>Item 3</MenuItem>
			</>
		)
	}
};
