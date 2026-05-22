import { TransactionResponse } from 'data/api-definitions';

export type SpendingCategory = {
	category: string;
	categoryId: string;
	total: number;
	count: number;
	percentage: number;
	color: string;
};

export type SpendingReportData = {
	categories: SpendingCategory[];
	totalSpending: number;
};

export type ReportsFormFields = {
	date: {
		from: Date | null;
		to: Date | null;
	};
	selectedFilter: string | null;
	selectedAccountId: string | null;
	selectedCategory: string | null;
};

export type AccountFilterOption = {
	label: string;
	value: string | null;
};

/** Dummy account list for development until BE endpoint is ready */
export const dummyAccounts: AccountFilterOption[] = [
	{ label: 'All Accounts', value: null },
	{ label: 'Chase Sapphire', value: 'chase-sapphire' },
	{ label: 'Wells Fargo Checking', value: 'wells-fargo-checking' }
];

/**
 * Category color palette — used consistently for pie chart segments and table indicators.
 * When the BE is ready, this can be driven by category metadata.
 */
export const categoryColors: Record<string, string> = {
	Groceries: '#36A2EB',
	Rent: '#FF6384',
	Dining: '#FF9F40',
	Utilities: '#4BC0C0',
	Transport: '#9966FF',
	Entertainment: '#FFCD56',
	Shopping: '#582CFF',
	Health: '#D62B70'
};

export const fallbackColor = '#A4A4A4';

/** Dummy transactions for development until BE endpoint is ready */
export const dummyTransactions: TransactionResponse[] = [
	{
		uuid: '1a2b3c4d-0001-4000-8000-000000000001',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Whole Foods Market',
		category_id: 'cat-groceries',
		amount: -8523,
		description: 'Weekly groceries',
		date: '2026-02-15T10:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Groceries',
		account_name: 'Chase Sapphire',
		subscription_candidate: false,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0002-4000-8000-000000000002',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Trader Joes',
		category_id: 'cat-groceries',
		amount: -4250,
		description: 'Snacks and produce',
		date: '2026-02-10T14:30:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Groceries',
		account_name: 'Chase Sapphire',
		subscription_candidate: false,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0003-4000-8000-000000000003',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Rent Payment',
		category_id: 'cat-rent',
		amount: -150000,
		description: 'Monthly rent',
		date: '2026-02-01T08:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Rent',
		account_name: 'Wells Fargo Checking',
		subscription_candidate: true,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0004-4000-8000-000000000004',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Chipotle',
		category_id: 'cat-dining',
		amount: -1450,
		description: 'Lunch',
		date: '2026-02-12T12:30:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Dining',
		account_name: 'Chase Sapphire',
		subscription_candidate: false,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0005-4000-8000-000000000005',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Starbucks',
		category_id: 'cat-dining',
		amount: -675,
		description: 'Coffee',
		date: '2026-02-14T08:15:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Dining',
		account_name: 'Chase Sapphire',
		subscription_candidate: false,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0006-4000-8000-000000000006',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Olive Garden',
		category_id: 'cat-dining',
		amount: -3800,
		description: 'Dinner',
		date: '2026-02-08T19:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Dining',
		account_name: 'Wells Fargo Checking',
		subscription_candidate: false,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0007-4000-8000-000000000007',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Electric Bill',
		category_id: 'cat-utilities',
		amount: -12500,
		description: 'Monthly electric',
		date: '2026-02-05T09:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Utilities',
		account_name: 'Wells Fargo Checking',
		subscription_candidate: true,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0008-4000-8000-000000000008',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Internet - Comcast',
		category_id: 'cat-utilities',
		amount: -7999,
		description: 'Monthly internet',
		date: '2026-02-03T10:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Utilities',
		account_name: 'Wells Fargo Checking',
		subscription_candidate: true,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0009-4000-8000-000000000009',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Uber',
		category_id: 'cat-transport',
		amount: -2340,
		description: 'Ride to airport',
		date: '2026-02-20T07:30:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Transport',
		account_name: 'Chase Sapphire',
		subscription_candidate: false,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0010-4000-8000-000000000010',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Gas Station',
		category_id: 'cat-transport',
		amount: -5500,
		description: 'Fill up',
		date: '2026-02-18T16:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Transport',
		account_name: 'Wells Fargo Checking',
		subscription_candidate: false,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0011-4000-8000-000000000011',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Netflix',
		category_id: 'cat-entertainment',
		amount: -1599,
		description: 'Monthly subscription',
		date: '2026-02-01T00:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Entertainment',
		account_name: 'Chase Sapphire',
		subscription_candidate: true,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0012-4000-8000-000000000012',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Spotify',
		category_id: 'cat-entertainment',
		amount: -999,
		description: 'Music subscription',
		date: '2026-02-01T00:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Entertainment',
		account_name: 'Chase Sapphire',
		subscription_candidate: true,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0013-4000-8000-000000000013',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Amazon',
		category_id: 'cat-shopping',
		amount: -4599,
		description: 'Household items',
		date: '2026-02-22T11:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Shopping',
		account_name: 'Chase Sapphire',
		subscription_candidate: false,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0014-4000-8000-000000000014',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Target',
		category_id: 'cat-shopping',
		amount: -3200,
		description: 'Home supplies',
		date: '2026-02-16T14:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Shopping',
		account_name: 'Wells Fargo Checking',
		subscription_candidate: false,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0015-4000-8000-000000000015',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'CVS Pharmacy',
		category_id: 'cat-health',
		amount: -2800,
		description: 'Prescription',
		date: '2026-02-11T10:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Health',
		account_name: 'Wells Fargo Checking',
		subscription_candidate: false,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0016-4000-8000-000000000016',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Gym Membership',
		category_id: 'cat-health',
		amount: -4999,
		description: 'Monthly gym',
		date: '2026-02-01T06:00:00Z',
		currency: 'USD',
		type: 'expense',
		category: 'Health',
		account_name: 'Chase Sapphire',
		subscription_candidate: true,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0017-4000-8000-000000000017',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Salary Deposit',
		category_id: 'cat-income',
		amount: 450000,
		description: 'Bi-weekly paycheck',
		date: '2026-02-15T00:00:00Z',
		currency: 'USD',
		type: 'income',
		category: 'Income',
		account_name: 'Wells Fargo Checking',
		subscription_candidate: false,
		subscription_id: null
	},
	{
		uuid: '1a2b3c4d-0018-4000-8000-000000000018',
		user_id: '00000000-0000-4000-8000-000000000000',
		title: 'Salary Deposit',
		category_id: 'cat-income',
		amount: 450000,
		description: 'Bi-weekly paycheck',
		date: '2026-02-01T00:00:00Z',
		currency: 'USD',
		type: 'income',
		category: 'Income',
		account_name: 'Wells Fargo Checking',
		subscription_candidate: false,
		subscription_id: null
	}
];
