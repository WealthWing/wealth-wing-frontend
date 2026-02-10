export type SubscriptionStatus = 'active' | 'ended';

export type SubscriptionListItem = {
	id: string;
	name: string;
	monthlyCost: number;
	nextBillingLabel: string;
	status: SubscriptionStatus;
};

export type SubscriptionTransaction = {
	id: string;
	name: string;
	amount: number;
	date: string;
};

export const subscriptions: SubscriptionListItem[] = [
	{
		id: 'spotify',
		name: 'Spotify',
		monthlyCost: 9.99,
		nextBillingLabel: 'Tomorrow',
		status: 'active'
	},
	{
		id: 'netflix',
		name: 'Netflix',
		monthlyCost: 15.99,
		nextBillingLabel: 'Mar 12',
		status: 'active'
	},
	{
		id: 'notion',
		name: 'Notion',
		monthlyCost: 12,
		nextBillingLabel: 'Apr 02',
		status: 'active'
	},
	{
		id: 'figma',
		name: 'Figma',
		monthlyCost: 12,
		nextBillingLabel: 'Mar 28',
		status: 'active'
	},
	{
		id: 'adobe',
		name: 'Adobe CC',
		monthlyCost: 54.99,
		nextBillingLabel: 'Ended',
		status: 'ended'
	},
	{
		id: 'medium',
		name: 'Medium',
		monthlyCost: 5,
		nextBillingLabel: 'Ended',
		status: 'ended'
	}
];

export const transactionsBySubscriptionId: Record<string, SubscriptionTransaction[]> = {
	spotify: [
		{ id: 'sp-1', name: 'Spotify', amount: -9.99, date: 'Mar 01, 2026' },
		{ id: 'sp-2', name: 'Spotify', amount: -9.99, date: 'Feb 01, 2026' },
		{ id: 'sp-3', name: 'Spotify', amount: -9.99, date: 'Jan 01, 2026' }
	],
	netflix: [
		{ id: 'nf-1', name: 'Netflix', amount: -15.99, date: 'Mar 05, 2026' },
		{ id: 'nf-2', name: 'Netflix', amount: -15.99, date: 'Feb 05, 2026' }
	],
	notion: [
		{ id: 'no-1', name: 'Notion', amount: -12, date: 'Mar 02, 2026' },
		{ id: 'no-2', name: 'Notion', amount: -12, date: 'Feb 02, 2026' }
	],
	figma: [
		{ id: 'fi-1', name: 'Figma', amount: -12, date: 'Mar 03, 2026' },
		{ id: 'fi-2', name: 'Figma', amount: -12, date: 'Feb 03, 2026' }
	],
	adobe: [],
	medium: []
};
