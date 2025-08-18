import { SkeletonLoaderContainer, SkeletonTextLoader } from '@wealth-wing/tayo';
import React from 'react';

export const TableSkeletonLoader = () => {
	return (
		<SkeletonLoaderContainer
			size={5}
			gap="s8"
			renderComponent={(key) => <SkeletonTextLoader key={key} variant="h2" />}
		/>
	);
};
