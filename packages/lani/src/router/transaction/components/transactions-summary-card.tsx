import { Box, Flex, Heading, Text } from '@wealth-wing/tayo';
import React from 'react';

type TransactionsSummaryCardProps = {
	title: string;
	amount: string;
};

export const TransactionsSummaryCard = ({ amount, title }: TransactionsSummaryCardProps) => {
	return (
		<Box
			padding="s10"
			backgroundColor="cardBackground80"
			borderRadius="radiusMedium"
			boxShadow="default100"
		>
			<Flex gap="s16" direction="column" alignItems="center">
				<Text color="textSecondary" font="lg">
					{title}
				</Text>
				<Heading color="textPrimary" tag="h4" font="h6">
					{amount}
				</Heading>
			</Flex>
		</Box>
	);
};
