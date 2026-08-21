import { Heading, Icon, IconButton, ScreenReaderOnly } from '@wealth-wing/tayo';
import React from 'react';
import { Link } from 'react-router-dom';
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
	onSuggestion: (prompt: string) => void;
};

const suggestionIcons = ['money-bill', 'credit-card', 'list'] as const;

const AnalystReport = ({ turn, onSuggestion }: AnalystReportProps) => {
	const { response } = turn;
	const titleId = `lani-response-${turn.id}`;
	const [dateScope, accountScope = 'All accounts', currency = 'USD'] = response.scope
		.split('•')
		.map((item) => item.trim());

	return (
		<div css={aiChatPage.turn}>
			<div css={aiChatPage.userPrompt}>
				<p css={aiChatPage.userPromptText}>{turn.prompt}</p>
				<span css={aiChatPage.messageMeta}>
					9:41 AM <span aria-label="Delivered">✓✓</span>
				</span>
			</div>

			<div css={aiChatPage.responseGroup}>
				<article css={aiChatPage.report} aria-labelledby={titleId}>
					<header css={aiChatPage.reportHeader}>
						<h2 id={titleId} tabIndex={-1} css={aiChatPage.reportTitle}>
							<span css={aiChatPage.assistantMark} aria-hidden="true">
								<Icon name="sparkles" size="s20" />
							</span>
							Wealth Wing AI
						</h2>
						<time css={aiChatPage.reportTime}>9:41 AM</time>
					</header>

					<div css={aiChatPage.scopeBar} aria-label={response.scope}>
						<span css={aiChatPage.scopeItem}>
							<Icon name="calendar" size="s16" aria-hidden="true" />
							{dateScope}
						</span>
						<span css={aiChatPage.scopeDivider}>•</span>
						<span css={aiChatPage.scopeItem}>
							<Icon name="credit-card" size="s16" aria-hidden="true" />
							{accountScope}
						</span>
						<span css={aiChatPage.scopeDivider}>•</span>
						<span>{currency}</span>
					</div>

					<div css={aiChatPage.answerLayout}>
						<section
							css={aiChatPage.featuredMetric}
							aria-label={response.kpis[0].label}
						>
							<strong css={aiChatPage.metricValue}>{response.kpis[0].value}</strong>
							<span css={aiChatPage.metricLabel}>{response.kpis[0].label}</span>
							<span css={aiChatPage.metricTrend}>
								<Icon name="trending-up" size="s20" aria-hidden="true" />
								<strong>{response.kpis[1].supportingText}</strong>
							</span>
						</section>

						<section css={aiChatPage.insight}>
							<div css={aiChatPage.insightIcon} aria-hidden="true">
								<Icon name="bar-chart" size="s24" />
							</div>
							<div>
								<h3 css={aiChatPage.sectionLabel}>What this means</h3>
								<p css={aiChatPage.insightText}>{response.answer}</p>
							</div>
						</section>
					</div>

					<footer css={aiChatPage.evidenceFooter}>
						<div css={aiChatPage.evidenceActions}>
							<span css={aiChatPage.evidenceSummary}>
								<Icon name="list" size="s16" aria-hidden="true" />
								{response.evidenceSummary}
							</span>
							<button type="button" css={aiChatPage.textButton}>
								View details <span aria-hidden="true">›</span>
							</button>
						</div>
						<button
							type="button"
							css={aiChatPage.feedbackButton}
							aria-label="This was helpful"
						>
							<Icon name="check-square" size="s16" aria-hidden="true" />
						</button>
					</footer>
				</article>

				<div css={aiChatPage.suggestionButtons} aria-label="Suggested follow-up questions">
					{response.suggestions.map((suggestion, index) => (
						<button
							key={suggestion}
							type="button"
							css={aiChatPage.suggestionButton}
							onClick={() => onSuggestion(suggestion)}
						>
							<Icon
								name={suggestionIcons[index] || 'sparkles'}
								size="s16"
								aria-hidden="true"
							/>
							{suggestion}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export const AiChatPage = () => {
	const [turns, setTurns] = React.useState<ChatTurn[]>(() => [createSeededTurn()]);
	const [prompt, setPrompt] = React.useState('');
	const [announcement, setAnnouncement] = React.useState('');
	const [historyOpen, setHistoryOpen] = React.useState(false);
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
				response: analystResponses[topic]
			}
		]);
		setPrompt('');
		setHistoryOpen(false);
		setAnnouncement(`Wealth Wing AI analysis ready for: ${trimmedPrompt}`);
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
		setHistoryOpen(false);
		setAnnouncement('New chat started');
		window.requestAnimationFrame(() => composerRef.current?.focus());
	};

	return (
		<section css={aiChatPage.root} aria-label="Wealth Wing financial analyst">
			<button
				type="button"
				aria-label="Close conversation history"
				css={[aiChatPage.railBackdrop, historyOpen && aiChatPage.railBackdropOpen]}
				onClick={() => setHistoryOpen(false)}
			/>
			<aside
				id="conversation-history"
				css={[aiChatPage.conversationRail, historyOpen && aiChatPage.conversationRailOpen]}
				aria-label="Conversation history"
			>
				<div css={aiChatPage.railHeader}>
					<strong>AI Assistant</strong>
					<button type="button" css={aiChatPage.railIconButton} onClick={handleNewChat}>
						<Icon name="plus" size="s20" aria-hidden="true" />
						<ScreenReaderOnly>Start a new chat</ScreenReaderOnly>
					</button>
				</div>

				<div css={aiChatPage.railScroll}>
					<p css={aiChatPage.railEyebrow}>Today</p>
					<button
						type="button"
						css={aiChatPage.activeConversation}
						onClick={() => setHistoryOpen(false)}
					>
						<span>How much did I spend on dining last month?</span>
						<time>9:41 AM</time>
					</button>

					<nav css={aiChatPage.topicNav} aria-label="Financial topics">
						{quickTopics.map((topic, index) => (
							<button
								key={topic.topic}
								type="button"
								onClick={() => appendPrompt(topic.prompt)}
							>
								<Icon
									name={suggestionIcons[index] || 'sparkles'}
									size="s20"
									aria-hidden="true"
								/>
								{topic.label}
								<span aria-hidden="true">›</span>
							</button>
						))}
					</nav>

					<p css={aiChatPage.railEyebrow}>Previous conversations</p>
					<div css={aiChatPage.previousChats}>
						{[
							['March spending summary', 'Mar 30'],
							['Cash flow this month', 'Mar 28'],
							['Top spending categories', 'Mar 27'],
							['Income vs expenses', 'Mar 20']
						].map(([label, date]) => (
							<button key={label} type="button" onClick={() => appendPrompt(label)}>
								<span>{label}</span>
								<time>{date}</time>
							</button>
						))}
					</div>
				</div>
				<Link
					to="/accounts"
					css={aiChatPage.backToApp}
					onClick={() => setHistoryOpen(false)}
				>
					<Icon name="wealth-wing" size="s20" aria-hidden="true" />
					Back to Wealth Wing
					<span aria-hidden="true">›</span>
				</Link>
			</aside>

			<div css={aiChatPage.chatShell}>
				<header css={aiChatPage.header}>
					<div css={aiChatPage.brand}>
						<button
							type="button"
							css={aiChatPage.mobileMenuButton}
							aria-label="Open conversation history"
							aria-controls="conversation-history"
							aria-expanded={historyOpen}
							onClick={() => setHistoryOpen(true)}
						>
							<Icon name="menu" size="s20" aria-hidden="true" />
						</button>
						<span css={aiChatPage.brandIcon} aria-hidden="true">
							<Icon name="sparkles" size="s24" />
						</span>
						<div>
							<Heading tag="h1" font="h5" className="lani-route-title">
								<span css={aiChatPage.title}>Wealth Wing AI</span>
							</Heading>
							<p css={aiChatPage.subtitle}>Your AI financial analyst</p>
						</div>
					</div>
					<div css={aiChatPage.headerActions}>
						<button
							type="button"
							css={aiChatPage.newChatButton}
							onClick={handleNewChat}
						>
							<Icon name="plus" size="s20" aria-hidden="true" />
							<span>New chat</span>
						</button>
						<IconButton
							type="button"
							format="outline"
							variant="tertiary"
							iconName="more-horizontal"
							label="More chat options"
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
								<p>Ask about spending, accounts, or cash flow.</p>
								<div css={aiChatPage.quickTopics} aria-label="Quick topics">
									{quickTopics.map((topic) => (
										<button
											key={topic.topic}
											type="button"
											css={aiChatPage.suggestionButton}
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
									onSuggestion={appendPrompt}
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
									aria-label="Ask Wealth Wing AI about your finances"
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
							Wealth Wing AI can make mistakes. Please verify important information.
						</p>
					</div>
				</form>
			</div>

			<ScreenReaderOnly>
				<span aria-live="polite">{announcement}</span>
			</ScreenReaderOnly>
		</section>
	);
};
