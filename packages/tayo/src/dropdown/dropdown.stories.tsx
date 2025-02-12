import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from '../button';
import { Menu, MenuItem } from '../menu';
import { Dropdown } from './dropdown';

const meta = {
	component: Dropdown,
	decorators: [
		function Component(Story, ctx) {
			return (
				<Dropdown {...ctx.args}>
					<Button type="button" variant="primary" format="outline">
						Menu
					</Button>
					<Menu>
						<MenuItem>{1}</MenuItem>
						<MenuItem>{1}</MenuItem>
						<MenuItem>{1}</MenuItem>
					</Menu>
				</Dropdown>
			);
		}
	],
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DropdownStory: Story = {
	args: {
		children: ''
	}
};
