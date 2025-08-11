import {
	Button,
	Flex,
	Heading,
	SkeletonAreaLoader,
	SkeletonLoaderContainer
} from '@wealth-wing/tayo';
import { container, HeadingContainer } from 'components/heading-container';
import { NoFound } from 'components/no-found';
import { Section } from 'components/section';
import React from 'react';
import { useGetAcccountsQuery } from 'redux/account';
import { AccountCard } from 'router/account/components/account-card';
import { accountCard } from 'router/account/components/account-card.styles';
import { AccountFormModal } from 'router/account/components/account-modal';
import { useCreateAccount } from 'router/account/hooks/use-create-account';
import { useUpdateAccount } from 'router/account/hooks/use-update-account';
import { stickyContainer } from 'router/jobs/jobs.styles';

export const AccountPage = () => {
	const { onAccountModalOpen, ...createModalRest } = useCreateAccount();
	const { onAccountModalOpen: onUpdateAccountModalOpen, ...updateModalRest } = useUpdateAccount();

	const { data, isLoading, isFetching } = useGetAcccountsQuery();

	const isLoadingOrfetchingAccounts = isLoading || isFetching;

	const isEmpty = !isLoadingOrfetchingAccounts && data?.length === 0;

	return (
		<>
			<Flex direction="column" gap="s20" css={container}>
				<div css={stickyContainer}>
					<HeadingContainer>
						<Heading tag="h1">Accounts</Heading>
					</HeadingContainer>
					<Section
						title="Account List"
						button={
							<Button
								variant="tertiary"
								format="text"
								size="small"
								onClick={onAccountModalOpen}
							>
								Add Account
							</Button>
						}
					>
						{isEmpty && (
							<NoFound
								title="No accounts yet"
								subtitle="Start by adding your first account to track balances and imports."
							>
								<Button
									variant="primary"
									format="regular"
									onClick={onAccountModalOpen}
								>
									Add Account
								</Button>
							</NoFound>
						)}
						{isLoadingOrfetchingAccounts && (
							<SkeletonLoaderContainer
								size={3}
								gap="s20"
								direction="row"
								renderComponent={(i) => (
									<SkeletonAreaLoader
										key={i}
										minWidth="12rem"
										height="10rem"
										width="100%"
									/>
								)}
							/>
						)}
						{!isEmpty && (
							<ul css={accountCard.container}>
								{data?.map((a) => (
									<AccountCard
										onUpdateAccountModalOpen={onUpdateAccountModalOpen}
										key={a.uuid}
										accountDetails={a}
									/>
								))}
							</ul>
						)}
					</Section>
				</div>
			</Flex>
			<AccountFormModal {...createModalRest} title="Add Account" buttonLabel="Add Account" />
			<AccountFormModal
				{...updateModalRest}
				title="Edit Account"
				buttonLabel="Edit Account"
			/>
		</>
	);
};
