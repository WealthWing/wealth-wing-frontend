import {
	BarChart,
	Button,
	Heading,
	Icon,
	IconButton,
	ScreenReaderOnly,
	Text
} from '@wealth-wing/tayo';
import React from 'react';
import {
	analystResponses,
	createSeededTurn,
	getTopicForPrompt,
	quickTopics
} from 'router/ai/ai-chat.data';
import { ChatTurn } from 'router/ai/ai-chat.definitions';
import { aiChatPage } from 'router/ai/ai-chat-page.styles';

type AnalystReportProps = {
	turn: ChatTurn;
	isExpanded: boolean;
	onSuggestion: (suggestion: string, turnId: string) => void;
	onToggleDetails: (turnId: string) => void;
};

const suggestionIcons = ['money-bill', 'credit-card', 'list'] as const;

const AnalystReport = ({ turn, isExpanded, onSuggestion, onToggleDetails }: AnalystReportProps) => {
	const { response } = turn;
	const titleId = `lani-response-${turn.id}`;
	const evidenceId = `lani-evidence-${turn.id}`;

	return (
		<div css={aiChatPage.turn}>
			<div css={aiChatPage.userPrompt}>
				<p css={aiChatPage.userPromptText}>{turn.prompt}</p>
				<span css={aiChatPage.messageMeta}>
					{turn.timestamp} <span aria-label="Sent">✓</span>
				</span>
			</div>
			<div css={aiChatPage.responseGroup}>
				<article css={aiChatPage.report} aria-labelledby={titleId}>
					<header css={aiChatPage.reportHeader}>
						<h2 id={titleId} tabIndex={-1} css={aiChatPage.reportTitle}>
							<span css={aiChatPage.assistantMark} aria-hidden="true">
								<Icon name="sparkles" size="s16" />
							</span>
							<span>Lani</span>
							<ScreenReaderOnly>— {response.title}</ScreenReaderOnly>
						</h2>
						<time css={aiChatPage.reportTime}>{turn.timestamp}</time>
					</header>

					<div css={aiChatPage.scopeBar}>
						<Icon name="calendar" size="s16" aria-hidden="true" />
						<span>{response.scope}</span>
					</div>

					<div css={aiChatPage.analysisOverview} aria-label="Financial summary">
						<div css={aiChatPage.featuredMetric}>
							<strong css={aiChatPage.metricValue}>{response.kpis[0].value}</strong>
							<span css={aiChatPage.metricLabel}>{response.kpis[0].label}</span>
							<span css={aiChatPage.metricTrend}>
								<Icon
									name={response.kpis[1].icon}
									color={response.kpis[1].accentColor}
									size="s20"
									aria-hidden="true"
								/>
								<strong>{response.kpis[1].value}</strong>
								<span>{response.kpis[1].supportingText}</span>
							</span>
						</div>

						<div css={aiChatPage.chartPanel}>
							<BarChart
								css={aiChatPage.chart}
								labels={response.chart.labels}
								datasets={[
									{
										label: response.chart.label,
										data: response.chart.values,
										backgroundColor: '#E680A9',
										borderColor: '#E680A9',
										borderRadius: 4,
										barPercentage: 0.58
									},
									{
										label: response.chart.comparisonLabel,
										data: response.chart.comparisonValues,
										backgroundColor: 'rgba(123, 121, 147, 0.18)',
										borderColor: '#7B7993',
										borderWidth: 1,
										borderRadius: 4,
										barPercentage: 0.58
									}
								]}
								title={`${response.kpis[0].label} trend`}
								displayLegend
								isCurrencyFormat
								ariaLabel={`${response.kpis[0].label} comparison chart`}
								ariaDescription={response.insight}
							/>
						</div>
					</div>

					<section css={aiChatPage.insight} aria-labelledby={`${titleId}-insight`}>
						<h3 id={`${titleId}-insight`} css={aiChatPage.sectionLabel}>
							<Icon
								name="alert-circle"
								color="primary60"
								size="s20"
								aria-hidden="true"
							/>
							What this means
						</h3>
						<p css={aiChatPage.insightText}>{response.insight}</p>
					</section>

					<div css={aiChatPage.evidenceFooter}>
						<div css={aiChatPage.evidenceActions}>
							<span css={aiChatPage.evidenceSummary}>
								<Icon name="list" size="s16" aria-hidden="true" />
								{response.evidenceSummary}
							</span>
							<button
								type="button"
								css={aiChatPage.textButton}
								aria-expanded={isExpanded}
								aria-controls={evidenceId}
								onClick={() => onToggleDetails(turn.id)}
							>
								{isExpanded ? 'Hide details' : 'View details'} →
							</button>
						</div>
						<span css={aiChatPage.mockBadge}>Mock analysis</span>
					</div>

					{isExpanded && (
						<ul id={evidenceId} css={aiChatPage.evidenceList}>
							<li css={aiChatPage.evidenceCaption}>
								Showing {response.evidence.length} representative transactions
							</li>
							{response.evidence.map((transaction) => (
								<li key={transaction.id} css={aiChatPage.evidenceRow}>
									<span>{transaction.merchant}</span>
									<span css={aiChatPage.secondaryValue}>{transaction.date}</span>
									<span css={aiChatPage.secondaryValue}>
										{transaction.account}
									</span>
									<span css={aiChatPage.amount}>{transaction.amount}</span>
								</li>
							))}
						</ul>
					)}
				</article>

				<div css={aiChatPage.suggestions} aria-label="Suggested follow-up questions">
					<div css={aiChatPage.suggestionButtons}>
						{response.suggestions.map((suggestion, index) => (
							<button
								key={suggestion}
								type="button"
								css={aiChatPage.topicButton}
								onClick={() => onSuggestion(suggestion, turn.id)}
							>
								<Icon
									name={suggestionIcons[index] ?? 'sparkles'}
									size="s16"
									aria-hidden="true"
								/>
								{suggestion}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export const AiChatPage = () => {
	const [turns, setTurns] = React.useState<ChatTurn[]>(() => [createSeededTurn()]);
	const [prompt, setPrompt] = React.useState('');
	const [expandedTurnIds, setExpandedTurnIds] = React.useState<Set<string>>(() => new Set());
	const [announcement, setAnnouncement] = React.useState('');
	const turnCounter = React.useRef(0);
	const pendingFocusIdRef = React.useRef<string | null>(null);
	const composerRef = React.useRef<HTMLTextAreaElement>(null);
	const feedEndRef = React.useRef<HTMLDivElement>(null);

	React.useLayoutEffect(() => {
		if (!pendingFocusIdRef.current) return;

		const responseTitle = document.getElementById(`lani-response-${pendingFocusIdRef.current}`);
		responseTitle?.focus();
		pendingFocusIdRef.current = null;
	}, [turns]);

	React.useEffect(() => {
		feedEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
	}, [turns]);

	const appendPrompt = React.useCallback((nextPrompt: string, focusResponse = false) => {
		const trimmedPrompt = nextPrompt.trim();
		if (!trimmedPrompt) return;

		turnCounter.current += 1;
		const id = `mock-analysis-${turnCounter.current}`;
		const topic = getTopicForPrompt(trimmedPrompt);
		setTurns((currentTurns) => [
			...currentTurns,
			{
				id,
				prompt: trimmedPrompt,
				timestamp: new Intl.DateTimeFormat('en-US', {
					hour: 'numeric',
					minute: '2-digit'
				}).format(new Date()),
				response: analystResponses[topic]
			}
		]);
		setPrompt('');
		setAnnouncement(`Lani analysis ready for: ${trimmedPrompt}`);
		if (focusResponse) pendingFocusIdRef.current = id;
	}, []);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		appendPrompt(prompt);
	};

	const handlePromptKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			appendPrompt(prompt, true);
		}
	};

	const handleNewChat = () => {
		setTurns([]);
		setPrompt('');
		setExpandedTurnIds(new Set());
		setAnnouncement('New chat started');
		window.requestAnimationFrame(() => composerRef.current?.focus());
	};

	const handleToggleDetails = (turnId: string) => {
		setExpandedTurnIds((currentIds) => {
			const nextIds = new Set(currentIds);
			if (nextIds.has(turnId)) nextIds.delete(turnId);
			else nextIds.add(turnId);
			return nextIds;
		});
	};

	const handleSuggestion = (suggestion: string, turnId: string) => {
		if (suggestion === 'Show transactions') {
			handleToggleDetails(turnId);
			return;
		}

		appendPrompt(suggestion);
	};

	return (
		<section css={aiChatPage.root} aria-label="Lani financial analyst">
			<header css={aiChatPage.header}>
				<div css={aiChatPage.brand}>
					<span css={aiChatPage.brandIcon} aria-hidden="true">
						<Icon name="sparkles" size="s20" />
					</span>
					<div>
						<Heading tag="h1" font="h6" className="lani-route-title">
							<span css={aiChatPage.title}>Lani</span>
						</Heading>
						<p css={aiChatPage.subtitle}>Your AI financial analyst</p>
					</div>
				</div>
				<div css={aiChatPage.desktopNewChat}>
					<Button
						type="button"
						format="outline"
						variant="primary"
						onClick={handleNewChat}
					>
						<span css={aiChatPage.newChatContent}>
							<Icon name="plus" size="s16" aria-hidden="true" />
							New chat
						</span>
					</Button>
				</div>
				<div css={aiChatPage.mobileNewChat}>
					<IconButton
						type="button"
						format="outline"
						variant="primary"
						iconName="plus"
						label="Start a new chat"
						onClick={handleNewChat}
					/>
				</div>
			</header>

			<div css={aiChatPage.feed}>
				<div css={aiChatPage.feedInner}>
					{turns.length === 0 ? (
						<div css={aiChatPage.emptyState}>
							<span css={aiChatPage.emptyIcon} aria-hidden="true">
								<Icon name="sparkles" size="s32" />
							</span>
							<Heading tag="h2" font="h4">
								What would you like to understand?
							</Heading>
							<Text color="textSecondary" font="lg" textAlign="center">
								Ask Lani about spending, subscriptions, accounts, or cash flow.
							</Text>
							<div css={aiChatPage.quickTopics} aria-label="Quick topics">
								{quickTopics.map((topic) => (
									<button
										key={topic.topic}
										type="button"
										css={aiChatPage.topicButton}
										onClick={() => appendPrompt(topic.prompt)}
									>
										{topic.label}
									</button>
								))}
							</div>
						</div>
					) : (
						turns.map((turn) => (
							<AnalystReport
								key={turn.id}
								turn={turn}
								isExpanded={expandedTurnIds.has(turn.id)}
								onSuggestion={handleSuggestion}
								onToggleDetails={handleToggleDetails}
							/>
						))
					)}
					<div ref={feedEndRef} css={aiChatPage.feedEnd} />
				</div>
			</div>

			<form css={aiChatPage.composerWrap} onSubmit={handleSubmit}>
				<div css={aiChatPage.composerInner}>
					<div css={aiChatPage.composer}>
						<div css={aiChatPage.composerInputRow}>
							<Icon
								name="sparkles"
								size="s20"
								color="secondary60"
								aria-hidden="true"
							/>
							<textarea
								ref={composerRef}
								id="lani-prompt"
								aria-label="Ask Lani about your finances"
								css={aiChatPage.textarea}
								rows={1}
								value={prompt}
								placeholder="Ask about your finances..."
								onChange={(event) => setPrompt(event.target.value)}
								onKeyDown={handlePromptKeyDown}
							/>
						</div>
						<div css={aiChatPage.composerActions}>
							<span css={aiChatPage.accountScope}>
								<Icon name="credit-card" size="s16" aria-hidden="true" />
								All accounts
								<Icon name="arrow-down" size="s12" aria-hidden="true" />
							</span>
							<IconButton
								type="submit"
								format="regular"
								variant="primary"
								iconName="arrow-up"
								label="Send question"
								disabled={!prompt.trim()}
							/>
						</div>
					</div>
					<p css={aiChatPage.disclaimer}>
						Lani can make mistakes. Verify important financial information.
					</p>
				</div>
			</form>
			<ScreenReaderOnly>
				<span aria-live="polite">{announcement}</span>
			</ScreenReaderOnly>
		</section>
	);
};
