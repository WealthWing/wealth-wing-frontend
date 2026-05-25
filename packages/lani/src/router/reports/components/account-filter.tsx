import { Flex, Text } from '@wealth-wing/tayo';
import React from 'react';
import { dummyAccounts } from 'router/reports/reports-definitions';
import { reportsPage } from 'router/reports/reports-page.styles';

type AccountFilterProps = {
	selectedAccountId: string | null;
	onAccountChange: (accountId: string | null) => void;
};

export const AccountFilter = ({ selectedAccountId, onAccountChange }: AccountFilterProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target;
		onAccountChange(value === '' ? null : value);
	};

	return (
		<Flex direction="row" alignItems="center" gap="s8">
			<Text font="md" color="textSecondary">
				Account:
			</Text>
			<select
				css={reportsPage.accountSelect}
				value={selectedAccountId ?? ''}
				onChange={handleChange}
				aria-label="Filter by account"
			>
				{dummyAccounts.map((account) => (
					<option key={account.value ?? 'all'} value={account.value ?? ''}>
						{account.label}
					</option>
				))}
			</select>
		</Flex>
	);
};
