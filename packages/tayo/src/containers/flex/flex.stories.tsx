import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './flex';
import { Box } from '../box';

const meta: Meta<typeof Flex> = {
	component: Flex
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
	args: {
		children: 'Hello World',
		direction: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	render: (args) => (
		<Box padding="s16" backgroundColor="primary10">
			<Flex {...args}>
				<div>Child 1</div>
				<div>Child 2</div>
				<div>Child 3</div>
			</Flex>
		</Box>
	)
};
