import { Button, FormControl, Heading, Icon, IconButton, Text, TextArea } from '@wealth-wing/tayo';
import * as React from 'react';
import { quickTopics } from 'router/ai/ai-chat.data';
import { useAiChat } from 'router/ai/ai-chat-management';
import { aiChatPage } from 'router/ai/ai-chat-page.styles';
import { AnalystReport } from 'router/ai/analyst-report';
import { SpendingSummary } from 'router/ai/spending-summary';

export const AiChat = () => {
	const {
		appendPrompt,
		composerRef,
		feedEndRef,
		historyOpen,
		prompt,
		setHistoryOpen,
		setPrompt,
		startNewChat,
		turns
	} = useAiChat();

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

	return (
		<div css={aiChatPage.chatShell}>
			<header css={aiChatPage.header}>
				<div css={aiChatPage.brand}>
					<IconButton
						type="button"
						css={aiChatPage.mobileMenuButton}
						format="text"
						variant="tertiary"
						iconName="menu"
						label="Open conversation history"
						aria-controls="conversation-history"
						aria-expanded={historyOpen}
						onClick={() => setHistoryOpen(true)}
					/>
					<span css={aiChatPage.brandIcon} aria-hidden="true">
						<Icon name="sparkles" size="s32" />
					</span>
					<div>
						<Heading tag="h1" font="h5" className="lani-route-title">
							<span css={aiChatPage.title}>Wealth Wing AI</span>
						</Heading>
						<Text tag="p" font="md" css={aiChatPage.subtitle}>
							Your AI financial analyst
						</Text>
					</div>
				</div>
				<div css={aiChatPage.headerActions}>
					<Button
						type="button"
						format="regular"
						variant="primary"
						leftIcon="plus"
						onClick={startNewChat}
					>
						New chat
					</Button>
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
							<Text tag="p">Ask about spending, accounts, or cash flow.</Text>
							<div css={aiChatPage.quickTopics} aria-label="Quick topics">
								{quickTopics.map((topic) => (
									<Button
										key={topic.topic}
										type="button"
										format="outline"
										variant="tertiary"
										css={aiChatPage.suggestionButton}
										onClick={() => appendPrompt(topic.prompt)}
									>
										{topic.label}
									</Button>
								))}
							</div>
						</div>
					) : (
						turns.map((turn) =>
							turn.kind === 'transaction-summary' ? (
								<SpendingSummary
									key={turn.id}
									answer={turn.response.answer}
									titleId={`lani-response-${turn.id}`}
									summary={turn.response.results[0].data}
								/>
							) : (
								<AnalystReport key={turn.id} turn={turn} />
							)
						)
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
								size="s32"
								color="secondary60"
								aria-hidden="true"
							/>
							<FormControl
								id="lani-prompt"
								label="Ask Wealth Wing AI about your finances"
								hideLabel
							>
								<TextArea
									ref={composerRef}
									lines={1}
									css={aiChatPage.textarea}
									value={prompt}
									placeholder="Ask about your finances..."
									onChange={(event) => setPrompt(event.target.value)}
									onKeyDown={handlePromptKeyDown}
								/>
							</FormControl>
						</div>
						<Button
							variant="tertiary"
							format="light"
							size="medium"
							leftIcon="credit-card"
							rightIcon="arrow-down"
						>
							All accounts
						</Button>
					</div>
					<Text tag="p" font="sm" css={aiChatPage.disclaimer}>
						Wealth Wing AI can make mistakes. Please verify important information.
					</Text>
				</div>
			</form>
		</div>
	);
};
