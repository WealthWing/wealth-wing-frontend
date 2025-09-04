import { Box, Flex, Grid, Heading, Icon, IconName } from '@wealth-wing/tayo';
import React from 'react';

type AuthCardProps = {
	icon: IconName;
	title: string;
};

export const AuthCard = ({ icon, title }: AuthCardProps) => {
	return (
		<Box
			boxShadow="default200"
			padding="s12"
			border="default"
			borderRadius="radiusMedium"
			width="100%"
		>
			<Flex direction="row" gap="s8" alignItems="center" justifyContent="center">
				<Icon name={icon} size="s32" />
				<Heading tag="h2" font="h6">
					{title}
				</Heading>
			</Flex>
		</Box>
	);
};

export const AuthCardContainer = () => (
	<Grid gridTemplateColumns="1fr 1fr 1fr" gap="s8">
		<AuthCard icon="folder" title="Simple Imports" />
		<AuthCard icon="bar-chart" title="Clear Charts" />
		<AuthCard icon="search" title="Smart Insights" />
	</Grid>
);
