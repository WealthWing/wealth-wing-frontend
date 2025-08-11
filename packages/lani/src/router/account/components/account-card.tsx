import { Dropdown, Flex, Heading, Icon, IconButton, Menu, MenuItem, Text } from '@wealth-wing/tayo';
import { formatUtcDateTime } from '@wealth-wing/utils';
import { AccountResponse } from 'data/api-definitions';
import { accountCard } from 'router/account/components/account-card.styles';
import { accountTypeLabels } from 'router/account/components/account-modal.definitions';

type AccountCardProps = {
	accountDetails: AccountResponse;
	onUpdateAccountModalOpen: (id: string) => void;
};

export const AccountCard = ({ accountDetails, onUpdateAccountModalOpen }: AccountCardProps) => (
	<li>
		<div css={accountCard.root}>
			<Flex direction="row" justifyContent="space-between">
				<Flex direction="row" alignItems="center">
					<Icon name="chase" size="s20" />
					<Heading tag="h4" font="h6">
						{accountDetails.account_name}
					</Heading>
				</Flex>
				<Dropdown>
					<IconButton
						format="text"
						variant="tertiary"
						iconName="more-vertical"
						aria-haspopup="true"
						label="Account actions"
						iconColor="textPrimary"
					/>
					<Menu>
						<MenuItem onClick={() => onUpdateAccountModalOpen(accountDetails.uuid)}>
							Edit Account
						</MenuItem>
						<MenuItem
							onClick={() => {
								/* TODO: Implement delete account */
							}}
						>
							Delete Account
						</MenuItem>
					</Menu>
				</Dropdown>
			</Flex>
			<Flex direction="row" justifyContent="space-between" alignItems="center">
				<Text>{accountDetails.institution}</Text>
				<Flex direction="row" gap="s4">
					<Text>{accountTypeLabels[accountDetails.account_type]}</Text>
					<Text>...{accountDetails.last_four}</Text>
				</Flex>
			</Flex>

			<Text font="md">
				Last Imported:{' '}
				{accountDetails.updated_at
					? formatUtcDateTime(accountDetails.updated_at, {
							isLocalTime: true,
							dateFormat: 'month-day-year'
					  })
					: '-'}
			</Text>
		</div>
	</li>
);
