import { Button, Flex, Heading } from '@wealth-wing/tayo';
import { container, HeadingContainer } from 'components/heading-container';
import { Section } from 'components/section';
import React from 'react';
import { stickyContainer } from 'router/jobs/jobs.styles';

export const AccountPage = () => {
	return (
		<Flex direction="column" gap="s20" css={container}>
			<div css={stickyContainer}>
				<HeadingContainer>
					<Heading tag="h2">Accounts</Heading>
				</HeadingContainer>
				<Section
					title="Account List"
					button={
						<Button variant="tertiary" format="text">
							Add Account
						</Button>
					}
				>
					Accounts
				</Section>
			</div>
		</Flex>
	);
};
