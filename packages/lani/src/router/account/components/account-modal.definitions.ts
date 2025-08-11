import { OptionType } from '@wealth-wing/tayo';
import { AccountType } from 'data/api-definitions';

type AccountKey = Exclude<keyof OptionType, 'isDisabled'>;

export const accountTypeLabels: Record<AccountType, string> = {
	CREDIT_CARD: 'Credit Card',
	CHECKING: 'Checking',
	SAVINGS: 'Savings',
	CASH: 'Cash',
	INVESTMENT: 'Investment',
	LOAN: 'Loan',
	OTHER: 'Other'
};

export type AccoundOption = Record<AccountKey, string>;

export function getAccountOption(accountType: AccountType): AccoundOption {
	return {
		label: accountTypeLabels[accountType],
		value: accountType
	};
}

export const accountOptions = Object.keys(accountTypeLabels).map((t) =>
	getAccountOption(t as AccountType)
);
