import { Color, IconName } from '@wealth-wing/tayo';

export type ChatTopic = 'spending' | 'cash-flow';

export type AnalystKpi = {
	label: string;
	value: string;
	supportingText: string;
	icon: IconName;
	accentColor: Color;
};

export type EvidenceTransaction = {
	id: string;
	merchant: string;
	date: string;
	account: string;
	amount: string;
};

export type AnalystResponse = {
	topic: ChatTopic;
	answer: string;
	title: string;
	scope: string;
	kpis: AnalystKpi[];
	chart: {
		label: string;
		comparisonLabel: string;
		labels: string[];
		values: number[];
		comparisonValues: number[];
	};
	insight: string;
	evidenceSummary: string;
	evidence: EvidenceTransaction[];
	suggestions: string[];
};

export type ChatTurn = {
	id: string;
	prompt: string;
	response: AnalystResponse;
};
