import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './box';

const meta: Meta<typeof Box> = {
	component: Box
};

const container = css`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
`;

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
	args: {
		backgroundColor: 'primary10',
		padding: 's16',
		borderRadius: 'radiusDefault',
		height: '100%',
		width: '100%',
		boxShadow: 'default300',
		_css: container
	},
	render: (args) => (
		<Box {...args}>
			<Box
				{...args}
				backgroundColor="red100"
				boxShadow="default300"
				padding="s2"
				borderRadius="radiusDefault"
				width="10rem"
				height="10rem"
				color="textPrimary"
			>
				Red
			</Box>
			<Box
				{...args}
				backgroundColor="darkBlue100"
				boxShadow="default300"
				padding="s2"
				borderRadius="radiusDefault"
				width="10rem"
				height="10rem"
				color="textPrimary"
			>
				Blue
			</Box>
			<Box
				{...args}
				backgroundColor="green100"
				boxShadow="default300"
				borderRadius="radiusDefault"
				padding="s2"
				width="10rem"
				height="10rem"
				color="textPrimary"
			>
				Green
			</Box>
		</Box>
	)
};
