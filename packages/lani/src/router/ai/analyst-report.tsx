import { Button, Icon, IconButton, Text } from '@wealth-wing/tayo';
import { AnalystChatTurn } from 'router/ai/ai-chat.definitions';
import { useAiChat } from 'router/ai/ai-chat-management';
import { aiChatPage } from 'router/ai/ai-chat-page.styles';

type AnalystReportProps = {
	turn: AnalystChatTurn;
};

const suggestionIcons = ['money-bill', 'credit-card', 'list'] as const;

export const AnalystReport = ({ turn }: AnalystReportProps) => {
	const { appendPrompt } = useAiChat();
	const { response } = turn;
	const titleId = `lani-response-${turn.id}`;
	const [dateScope, accountScope = 'All accounts', currency = 'USD'] = response.scope
		.split('•')
		.map((item) => item.trim());

	return (
		<div css={aiChatPage.turn}>
			<div css={aiChatPage.userPrompt}>
				<Text tag="p" css={aiChatPage.userPromptText}>
					{turn.prompt}
				</Text>
				<span css={aiChatPage.messageMeta}>
					9:41 AM <span aria-label="Delivered">✓✓</span>
				</span>
			</div>

			<div css={aiChatPage.responseGroup}>
				<article css={aiChatPage.report} aria-labelledby={titleId}>
					<header css={aiChatPage.reportHeader}>
						<h2 id={titleId} tabIndex={-1} css={aiChatPage.reportTitle}>
							<span css={aiChatPage.assistantMark} aria-hidden="true">
								<Icon name="sparkles" size="s32" />
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
								<Text tag="p" css={aiChatPage.insightText}>
									{response.answer}
								</Text>
							</div>
						</section>
					</div>

					<footer css={aiChatPage.evidenceFooter}>
						<div css={aiChatPage.evidenceActions}>
							<span css={aiChatPage.evidenceSummary}>
								<Icon name="list" size="s16" aria-hidden="true" />
								{response.evidenceSummary}
							</span>
							<Button
								type="button"
								format="text"
								variant="primary"
								css={aiChatPage.textButton}
								rightIcon="chevron-right"
							>
								View details
							</Button>
						</div>
						<IconButton
							type="button"
							format="text"
							variant="tertiary"
							css={aiChatPage.feedbackButton}
							iconName="check-square"
							label="This was helpful"
						/>
					</footer>
				</article>

				<div css={aiChatPage.suggestionButtons} aria-label="Suggested follow-up questions">
					{response.suggestions.map((suggestion, index) => (
						<Button
							key={suggestion}
							type="button"
							format="outline"
							variant="tertiary"
							css={aiChatPage.suggestionButton}
							leftIcon={suggestionIcons[index] || 'sparkles'}
							onClick={() => appendPrompt(suggestion)}
						>
							{suggestion}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};
