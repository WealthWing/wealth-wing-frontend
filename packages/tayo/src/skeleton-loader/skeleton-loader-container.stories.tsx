import type { Meta, StoryObj } from '@storybook/react';

import { SkeletonTextLoader } from './skeleton-loader';
import { SkeletonLoaderContainer, SkeletonLoaderContainerProps } from './skeleton-loader-container';

const StoryComponentTextLoader = (args: SkeletonLoaderContainerProps) => {
	return <SkeletonLoaderContainer {...args} />;
};

const meta = {
	title: 'Skeleton Loaders',
	component: SkeletonLoaderContainer,
	parameters: {
		layout: 'centered'
	}
} satisfies Meta<typeof SkeletonLoaderContainer>;

export default meta;

export const SkeletonLoaderContainerStory: StoryObj<typeof meta> = {
	args: {
		size: 10,
		containerPadding: 's10',
		renderComponent: (i) => <SkeletonTextLoader key={i} width="300px" variant="button" />
	},
	render: (args) => <StoryComponentTextLoader {...args} />
};
