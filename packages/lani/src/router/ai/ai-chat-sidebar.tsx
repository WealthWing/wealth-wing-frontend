import { Button, Icon, IconButton, Text } from '@wealth-wing/tayo';
import { Link } from 'react-router-dom';
import { quickTopics } from 'router/ai/ai-chat.data';
import { useAiChat } from 'router/ai/ai-chat-management';
import { aiChatPage } from 'router/ai/ai-chat-page.styles';

const topicIcons = ['money-bill', 'credit-card', 'list'] as const;

export const AiChatSidebar = () => {
	const {
		appendPrompt,
		historyOpen,
		selectedConversation,
		selectSummaryConversation,
		setHistoryOpen,
		startNewChat
	} = useAiChat();

	return (
		<>
			<Button
				type="button"
				format="text"
				variant="tertiary"
				aria-label="Close conversation history"
				css={[aiChatPage.railBackdrop, historyOpen && aiChatPage.railBackdropOpen]}
				onClick={() => setHistoryOpen(false)}
			>
				Close conversation history
			</Button>
			<aside
				id="conversation-history"
				css={[aiChatPage.conversationRail, historyOpen && aiChatPage.conversationRailOpen]}
				aria-label="Conversation history"
			>
				<div css={aiChatPage.railHeader}>
					<strong>AI Assistant</strong>
					<IconButton
						type="button"
						format="text"
						variant="tertiary"
						iconName="plus"
						label="Start a new chat"
						css={aiChatPage.railIconButton}
						onClick={startNewChat}
					/>
				</div>

				<div css={aiChatPage.railScroll}>
					<nav css={aiChatPage.topicNav} aria-label="Financial topics">
						{quickTopics.map((topic, index) => (
							<Button
								key={topic.topic}
								type="button"
								format="text"
								variant="tertiary"
								isFullWidth
								leftIcon={topicIcons[index] || 'sparkles'}
								rightIcon="chevron-right"
								onClick={() => appendPrompt(topic.prompt)}
							>
								{topic.label}
							</Button>
						))}
					</nav>

					<Text tag="p" font="sm" css={aiChatPage.railEyebrow}>
						Previous conversations
					</Text>
					<div css={aiChatPage.previousChats}>
						<Button
							type="button"
							format="text"
							variant="tertiary"
							isFullWidth
							css={
								selectedConversation === 'spending-summary'
									? aiChatPage.activeConversation
									: aiChatPage.previousConversation
							}
							onClick={selectSummaryConversation}
						>
							<span>May–July spending summary</span>
							<time>Jul 31</time>
						</Button>
						{[
							['Cash flow this month', 'Mar 28'],
							['Top spending categories', 'Mar 27'],
							['Income vs expenses', 'Mar 20']
						].map(([label, date]) => (
							<Button
								key={label}
								type="button"
								format="text"
								variant="tertiary"
								isFullWidth
								css={aiChatPage.previousConversation}
								onClick={() => appendPrompt(label)}
							>
								<span>{label}</span>
								<time>{date}</time>
							</Button>
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
		</>
	);
};
