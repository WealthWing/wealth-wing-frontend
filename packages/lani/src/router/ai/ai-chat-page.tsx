import { Button, Heading, Icon, IconButton, ScreenReaderOnly, Text } from '@wealth-wing/tayo';
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
};

const AnalystReport = ({ turn }: AnalystReportProps) => {
	const { response } = turn;
	const titleId = `lani-response-${turn.id}`;

	return (
		<div css={aiChatPage.turn}>
			<div css={aiChatPage.userPrompt}>
				<p css={aiChatPage.userPromptText}>{turn.prompt}</p>
			</div>
			<article
				id={titleId}
				tabIndex={-1}
				css={aiChatPage.assistantResponse}
				aria-label="Lani's answer"
			>
				<p css={aiChatPage.assistantResponseText}>{response.answer}</p>
			</article>
		</div>
	);
};

export const AiChatPage = () => {
	const [turns, setTurns] = React.useState<ChatTurn[]>(() => [createSeededTurn()]);
	const [prompt, setPrompt] = React.useState('');
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
		setAnnouncement('New chat started');
		window.requestAnimationFrame(() => composerRef.current?.focus());
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
						turns.map((turn) => <AnalystReport key={turn.id} turn={turn} />)
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
