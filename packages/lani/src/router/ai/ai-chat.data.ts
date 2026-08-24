type QuickTopic = {
	topic: 'spending' | 'cash-flow';
	label: string;
	prompt: string;
};

export const quickTopics: QuickTopic[] = [
	{
		topic: 'spending',
		label: 'Spending',
		prompt: 'How much did I spend on dining last month?'
	},
	{
		topic: 'cash-flow',
		label: 'Cash flow',
		prompt: 'How did my cash flow change last month?'
	}
];
