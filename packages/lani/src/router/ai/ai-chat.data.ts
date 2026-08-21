import { AnalystResponse, ChatTopic, ChatTurn } from 'router/ai/ai-chat.definitions';

export const quickTopics: Array<{ topic: ChatTopic; label: string; prompt: string }> = [
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

export const analystResponses: Record<ChatTopic, AnalystResponse> = {
	spending: {
		topic: 'spending',
		answer: 'You spent $842.31 on dining last month across 14 transactions. That was $129.31 (18%) more than in February, mainly because you dined out more often and spent more on weekends.',
		title: 'Dining spending analysis',
		scope: 'Mar 1–31  •  All accounts  •  USD',
		kpis: [
			{
				label: 'Dining spending',
				value: '$842.31',
				supportingText: 'last month',
				icon: 'money-bill',
				accentColor: 'primary60'
			},
			{
				label: 'Change',
				value: '+$129.31',
				supportingText: '+18% vs February',
				icon: 'trending-up',
				accentColor: 'yellow60'
			},
			{
				label: 'Activity',
				value: '14',
				supportingText: 'transactions · 2 accounts',
				icon: 'switch-horizontal',
				accentColor: 'secondary60'
			}
		],
		chart: {
			label: 'Mar 1–31',
			comparisonLabel: 'Feb 1–28',
			labels: [
				'Mar 1',
				'Mar 4',
				'Mar 8',
				'Mar 12',
				'Mar 15',
				'Mar 19',
				'Mar 23',
				'Mar 27',
				'Mar 31'
			],
			values: [42, 24, 65, 48, 91, 52, 19, 38, 46],
			comparisonValues: [36, 31, 54, 43, 39, 58, 29, 45, 33]
		},
		insight:
			'You spent $129.31 more on dining than in February. Restaurant frequency and weekend spending were the main contributors.',
		evidenceSummary: '14 transactions  •  2 accounts',
		evidence: [
			{
				id: 'dining-1',
				merchant: 'Via Carota',
				date: 'Mar 23',
				account: 'Credit',
				amount: '$112.75'
			},
			{
				id: 'dining-2',
				merchant: 'The Smith',
				date: 'Mar 8',
				account: 'Checking',
				amount: '$68.42'
			},
			{
				id: 'dining-3',
				merchant: 'Sweetgreen',
				date: 'Mar 16',
				account: 'Credit',
				amount: '$24.18'
			}
		],
		suggestions: ['Top restaurants', 'Compare groceries', 'Show transactions']
	},
	'cash-flow': {
		topic: 'cash-flow',
		answer: 'Your net cash flow was positive $1,284.60 last month, an improvement of $410 from February. Stable income and lower utility spending more than offset the increase in dining costs.',
		title: 'Cash flow analysis',
		scope: 'Mar 1–31  •  All accounts  •  USD',
		kpis: [
			{
				label: 'Net cash flow',
				value: '+$1,284.60',
				supportingText: '+$410 vs February',
				icon: 'swap-vert',
				accentColor: 'green60'
			},
			{
				label: 'Income',
				value: '$6,420.00',
				supportingText: '3 deposits',
				icon: 'arrow-up-right',
				accentColor: 'green60'
			},
			{
				label: 'Outflows',
				value: '$5,135.40',
				supportingText: 'excluding transfers',
				icon: 'arrow-down',
				accentColor: 'secondary60'
			}
		],
		chart: {
			label: 'March',
			comparisonLabel: 'February',
			labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
			values: [810, -320, 1120, -325],
			comparisonValues: [640, -510, 980, -236]
		},
		insight:
			'Your cash flow improved by $410 compared with February. Stable income and lower utility spending offset higher dining costs.',
		evidenceSummary: '47 transactions  •  2 accounts',
		evidence: [
			{
				id: 'cash-flow-1',
				merchant: 'Payroll deposit',
				date: 'Mar 15',
				account: 'Checking',
				amount: '+$3,210.00'
			},
			{
				id: 'cash-flow-2',
				merchant: 'Rent payment',
				date: 'Mar 1',
				account: 'Checking',
				amount: '-$1,850.00'
			},
			{
				id: 'cash-flow-3',
				merchant: 'Utility bill',
				date: 'Mar 20',
				account: 'Credit',
				amount: '-$146.38'
			}
		],
		suggestions: ['Explain the improvement', 'Review large outflows', 'Show transactions']
	}
};

export const getTopicForPrompt = (prompt: string): ChatTopic => {
	const normalizedPrompt = prompt.toLowerCase();

	if (
		normalizedPrompt.includes('cash flow') ||
		normalizedPrompt.includes('income') ||
		normalizedPrompt.includes('outflow') ||
		normalizedPrompt.includes('improvement')
	) {
		return 'cash-flow';
	}

	return 'spending';
};

export const createSeededTurn = (): ChatTurn => ({
	id: 'seeded-dining-analysis',
	prompt: quickTopics[0].prompt,
	response: analystResponses.spending
});
