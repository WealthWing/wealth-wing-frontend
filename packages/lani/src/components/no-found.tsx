import { Box, Flex, Heading, Text } from '@wealth-wing/tayo';
import React from 'react';

type NoFoundProps = {
	title: string;
	subtitle: string;
	children?: React.ReactNode;
};

export const NoFound = ({ subtitle, title, children }: NoFoundProps) => {
	return (
		<Box padding="s4">
			<Flex gap="s8" alignItems="center">
				<Flex direction="column" gap="s4" alignItems="center">
					<Heading tag="h3" font="h4">
						{title}
					</Heading>
					<Text tag="p" color="textSecondary">
						{subtitle}
					</Text>
				</Flex>
				{children}
			</Flex>
		</Box>
	);
};
