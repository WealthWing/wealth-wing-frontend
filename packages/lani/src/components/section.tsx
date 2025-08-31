import { Box, Flex, Heading, Text } from '@wealth-wing/tayo';
import React from 'react';

type SectionProps = {
	children: React.ReactNode;
	title: string;
	subTitle?: string;
	sectionTools?: React.ReactNode;
	ariaLabel?: string;
};

export const Section = ({
	children,
	title,
	subTitle,
	sectionTools: button,
	ariaLabel
}: SectionProps) => {
	return (
		<Box
			tag="section"
			aria-label={ariaLabel}
			width="100%"
			backgroundColor="cardBackground100"
			borderRadius="radiusDefault"
			boxShadow="default200"
			padding="s20"
		>
			<Flex direction="column" gap="s20">
				<Flex direction="column" gap="none">
					<Flex direction="row" justifyContent="space-between">
						<Heading tag="h2" font="h5">
							{title}
						</Heading>
						{button}
					</Flex>
					<Text font="md" color="darkBlue20">
						{subTitle}
					</Text>
				</Flex>
				{children}
			</Flex>
		</Box>
	);
};
