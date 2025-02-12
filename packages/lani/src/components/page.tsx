import { Box } from '@wealth-wing/tayo';
import React from 'react';

type PageProps = {
	children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
	return (
		<Box width="100%" height="100%">
			{children}
		</Box>
	);
};
