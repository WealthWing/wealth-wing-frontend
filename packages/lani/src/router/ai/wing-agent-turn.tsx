import { Icon, Markdown, Text } from '@wealth-wing/tayo';
import type { TransactionSummaryResponse, WingAgentResponse } from 'data/api-definitions';
import type { ChatTurn } from 'redux/chat';
import { aiChatPage } from 'router/ai/ai-chat-page.styles';
import { SpendingSummary } from 'router/ai/spending-summary';

type WingAgentTurnProps = {
	turn: ChatTurn;
};

const accountTypes: TransactionSummaryResponse['included_account_types'] = [
	'CHECKING',
	'SAVINGS',
	'CREDIT_CARD',
	'CASH',
	'INVESTMENT',
	'LOAN',
	'OTHER'
];

const isRecord = (value: unknown): value is Record<string, unknown> =>
	typeof value === 'object' && value !== null && !Array.isArray(value);

const isAccountType = (
	value: unknown
): value is TransactionSummaryResponse['included_account_types'][number] =>
	typeof value === 'string' && accountTypes.some((accountType) => accountType === value);

const isTransactionSummary = (value: unknown): value is TransactionSummaryResponse => {
	if (!isRecord(value)) return false;

	return (
		typeof value.gross_expense === 'number' &&
		typeof value.refunds === 'number' &&
		typeof value.net_spending === 'number' &&
		typeof value.income === 'number' &&
		typeof value.net_activity === 'number' &&
		typeof value.expense_transaction_count === 'number' &&
		typeof value.refund_transaction_count === 'number' &&
		typeof value.income_transaction_count === 'number' &&
		typeof value.average_expense === 'number' &&
		typeof value.average_monthly_spending === 'number' &&
		typeof value.from_date === 'string' &&
		typeof value.to_date === 'string' &&
		Array.isArray(value.included_account_types) &&
		value.included_account_types.every(isAccountType)
	);
};

const getResponseError = (response: WingAgentResponse) => {
	if (response.error?.code === 'data_unavailable') {
		return 'The financial data needed for this answer is not available.';
	}

	if (response.error) {
		return 'Wealth Wing AI could not complete this request. Please try again.';
	}

	return null;
};

export const WingAgentTurn = ({ turn }: WingAgentTurnProps) => {
	const { response } = turn;
	const titleId = `lani-response-${response.turn_id}`;
	const transactionSummaryResult = response.results?.find(
		(result) => result.type === 'transaction_summary'
	);
	const responseError = getResponseError(response);
	const transactionSummary = isTransactionSummary(transactionSummaryResult?.data)
		? transactionSummaryResult.data
		: null;

	return (
		<div css={aiChatPage.turn}>
			<div css={aiChatPage.userPrompt}>
				<Text tag="p" css={aiChatPage.userPromptText}>
					{turn.prompt}
				</Text>
			</div>

			{transactionSummary && !responseError ? (
				<SpendingSummary
					answer={response.answer}
					titleId={titleId}
					summary={transactionSummary}
				/>
			) : (
				<article css={aiChatPage.report} aria-labelledby={titleId}>
					<header css={aiChatPage.reportHeader}>
						<h2 id={titleId} tabIndex={-1} css={aiChatPage.reportTitle}>
							<span css={aiChatPage.assistantMark} aria-hidden="true">
								<Icon name="sparkles" size="s24" />
							</span>
							Wealth Wing AI
						</h2>
					</header>

					<div css={aiChatPage.genericAnswer}>
						{response.answer ? <Markdown>{response.answer}</Markdown> : null}
						{responseError ? (
							<Text tag="p" css={aiChatPage.responseError}>
								{responseError}
							</Text>
						) : null}
					</div>
				</article>
			)}
		</div>
	);
};
