import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { Flex } from '../containers';
import { Menu, MenuItem } from '../menu';
import { Dropdown } from './dropdown';
import { DropdownPanel } from './dropdown-panel';

const meta: Meta<typeof Dropdown> = {
	component: Dropdown,
	parameters: {
		layout: 'centered'
	}
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const DropdownMenuStory: Story = {
	args: {
		children: ''
	},
	render: (args) => (
		<Dropdown {...args}>
			<Button type="button" variant="primary" format="outline">
				Menu
			</Button>
			<Menu>
				<MenuItem>{1}</MenuItem>
				<MenuItem>{1}</MenuItem>
				<MenuItem>{1}</MenuItem>
			</Menu>
		</Dropdown>
	)
};

const DropdownSection = ({ children }: { children: React.ReactNode }) => (
	<div style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>{children}</div>
);
export const DropdownPanelStory: Story = {
	args: {
		children: ''
	},
	render: (args) => (
		<Dropdown {...args} placement="bottom-end" distance={8}>
			<Button type="button" variant="primary" format="outline">
				Panel
			</Button>
			<DropdownPanel>
				<Flex direction="column" gap="s12">
					<DropdownSection>
						<Flex direction="row" gap="s12" alignItems="center">
							Filter Section
						</Flex>
					</DropdownSection>
					<DropdownSection>
						<Flex direction="row" gap="s12" alignItems="center">
							Another Section
						</Flex>
					</DropdownSection>
					<Flex direction="row" gap="s12" alignItems="center">
						Footer
					</Flex>
				</Flex>
			</DropdownPanel>
		</Dropdown>
	)
};
