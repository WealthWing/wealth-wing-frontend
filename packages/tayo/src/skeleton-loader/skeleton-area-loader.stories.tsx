import type { Meta, StoryObj } from '@storybook/react';

import { SkeletonAreaLoader } from './skeleton-loader';

const meta = {
	title: 'Skeleton Loaders',
	component: SkeletonAreaLoader,
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<typeof SkeletonAreaLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SkeletonAreaLoaderStory: Story = {
	args: {
		variant: 'rounded',
		minHeight: 'auto',
		maxHeight: 'auto',
		minWidth: 'auto',
		maxWidth: 'auto',
		width: '200px',
		height: '100px'
	}
};
