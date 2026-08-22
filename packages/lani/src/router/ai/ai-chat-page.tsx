import { ScreenReaderOnly } from '@wealth-wing/tayo';
import { AiChat } from 'router/ai/ai-chat';
import { AiChatProvider, useAiChat } from 'router/ai/ai-chat-management';
import { aiChatPage } from 'router/ai/ai-chat-page.styles';
import { AiChatSidebar } from 'router/ai/ai-chat-sidebar';

const AiChatPageContent = () => {
	const { announcement } = useAiChat();

	return (
		<section css={aiChatPage.root} aria-label="Wealth Wing financial analyst">
			<AiChatSidebar />
			<AiChat />
			<ScreenReaderOnly>
				<span aria-live="polite">{announcement}</span>
			</ScreenReaderOnly>
		</section>
	);
};

export const AiChatPage = () => (
	<AiChatProvider>
		<AiChatPageContent />
	</AiChatProvider>
);
