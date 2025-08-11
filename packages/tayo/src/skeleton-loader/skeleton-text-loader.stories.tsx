import type { Meta, StoryObj } from '@storybook/react';

import { SkeletonTextLoader } from './skeleton-loader';

const meta = {
	title: 'Skeleton Loaders',
	component: SkeletonTextLoader,
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<typeof SkeletonTextLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SkeletonLoaderTextStory: Story = {
	args: {
		variant: 'lg',
		minWidth: 'auto',
		maxWidth: 'auto',
		width: '200px'
	}
};
