import { Color, IconName } from '@wealth-wing/tayo';
import { TransactionSummaryResponse, WingAgentResponse } from 'data/api-definitions';

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

export type AnalystChatTurn = {
	kind: 'analyst';
	id: string;
	prompt: string;
	response: AnalystResponse;
};

export type TransactionSummaryChatTurn = {
	kind: 'transaction-summary';
	id: string;
	response: TransactionSummaryAgentResponse;
};

export type TransactionSummaryAgentResult = {
	id: string;
	type: 'transaction_summary';
	data: TransactionSummaryResponse;
	ui: 'transactions_summary_ui';
};

export type TransactionSummaryAgentResponse = Omit<WingAgentResponse, 'results'> & {
	results: [TransactionSummaryAgentResult];
};

export type ChatTurn = AnalystChatTurn | TransactionSummaryChatTurn;
