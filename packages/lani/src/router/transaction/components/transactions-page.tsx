import { BarChart, Flex, Grid, Heading } from '@wealth-wing/tayo';
import { container, HeadingContainer } from 'components/heading-container';
import { Section } from 'components/section';
import React from 'react';
import { stickyContainer } from 'router/jobs/jobs.styles';
import { transactionsPage } from 'router/transaction/components/transaction-page.styles';

export const TransactionsPage = () => {
	return (
		<Flex direction="column" gap="s20" css={[container, { minHeight: '98vh' }]}>
			<div css={stickyContainer}>
				<HeadingContainer>
					<Heading tag="h1">Transactions</Heading>
				</HeadingContainer>
			</div>
			<Grid
				gap="s24"
				gridTemplateColumns="1fr 320px"
				css={{ minHeight: '0', height: '100%' }}
			>
				<Section title="Account List">
					<BarChart
						css={{ width: '100%', minHeight: '300px' }}
						datasets={[
							{
								label: 'Dataset 1',
								data: [1, 2, 3],
								borderColor: '#36A2EB',
								backgroundColor: '#9BD0F5'
							},
							{
								label: 'Dataset 2',
								data: [4, 5, 6],
								borderColor: '#FF6384',
								backgroundColor: '#FFB1C1'
							}
						]}
						labels={['A', 'B', 'C']}
					/>
				</Section>

				<div css={transactionsPage.sideBar}>Side Bar</div>
			</Grid>
		</Flex>
	);
};
