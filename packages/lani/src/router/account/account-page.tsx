import {
	Button,
	Flex,
	Grid,
	Heading,
	SkeletonAreaLoader,
	SkeletonLoaderContainer,
	useDisclosureControl
} from '@wealth-wing/tayo';
import { HeadingContainer } from 'components/heading-container';
import { NoFound } from 'components/no-found';
import { Section } from 'components/section';
import * as React from 'react';
import { useGetAcccountsQuery } from 'redux/account';
import { useSubscriptionCandidatesQuery } from 'redux/transaction-queries';
import { AccountCard } from 'router/account/components/account-card';
import { accountCard } from 'router/account/components/account-card.styles';
import { AccountImports } from 'router/account/components/account-imports';
import { AccountFormModal } from 'router/account/components/account-modal';
import { useCreateAccount } from 'router/account/hooks/use-create-account';
import { useUpdateAccount } from 'router/account/hooks/use-update-account';
import { ImportModal } from 'router/import/components/import-modal';

/* TODO: TABLE SKELETON LOADING */

export const AccountPage = () => {
	const { onAccountModalOpen, ...createModalRest } = useCreateAccount();
	const { onAccountModalOpen: onUpdateAccountModalOpen, ...updateModalRest } = useUpdateAccount();
	const [defaultAccountId, setDefaultAccountId] = React.useState<string | null>(null);
	const {
		isOpen: isImportOpen,
		handleClose: onImportClose,
		handleOpen: onImportOpen
	} = useDisclosureControl({ onClose: () => setDefaultAccountId(null) });
	const { data: subscriptionCandidatesData } = useSubscriptionCandidatesQuery();

	const { data, isLoading, isFetching } = useGetAcccountsQuery();

	const isLoadingOrfetchingAccounts = isLoading || isFetching;

	const isEmpty = !isLoadingOrfetchingAccounts && data?.length === 0;

	const handleOpenImportModal = (accountId: string) => {
		onImportOpen();
		setDefaultAccountId(accountId);
	};
	console.log(subscriptionCandidatesData, 'subscriptionCandidatesData');
	return (
		<>
			<HeadingContainer>
				<Heading tag="h1">Accounts</Heading>
			</HeadingContainer>
			<div css={{ overflow: 'auto' }}>
				<Flex gap="s16">
					<Section
						title="Account List"
						sectionTools={
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
										onImportOpen={handleOpenImportModal}
										key={a.uuid}
										accountDetails={a}
									/>
								))}
							</ul>
						)}
					</Section>
					<Grid gridTemplateColumns="1fr 1fr" gap="s16">
						<AccountImports />
						<Section
							title="Subscription Candidates"
							subTitle="Automatically identified recurring patterns. Click to confirm, create a subscription, or associate with an existing one."
						>
							<Flex direction="column" gap="s8">
								{subscriptionCandidatesData?.map((c) => c.title)}
							</Flex>
						</Section>
					</Grid>
				</Flex>
			</div>
			<AccountFormModal {...createModalRest} title="Add Account" buttonLabel="Add Account" />
			<AccountFormModal
				{...updateModalRest}
				title="Edit Account"
				buttonLabel="Edit Account"
			/>
			<ImportModal
				isOpen={isImportOpen}
				onClose={onImportClose}
				defaultAccountId={defaultAccountId}
			/>
		</>
	);
};
