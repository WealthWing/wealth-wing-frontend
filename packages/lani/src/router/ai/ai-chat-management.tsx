import { createProvider } from '@wealth-wing/tayo';
import * as React from 'react';
import { useInvokeWingAgentMutation } from 'redux/ai-queries';
import type { ChatTurn } from 'redux/chat';
import { chatCleared, selectActiveThreadId, selectChatTurns, turnCompleted } from 'redux/chat';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

export type AiChatManagementProps = {
	announcement: string;
	appendPrompt: (nextPrompt: string, focusResponse?: boolean) => Promise<void>;
	composerRef: React.RefObject<HTMLTextAreaElement | null>;
	feedEndRef: React.RefObject<HTMLDivElement | null>;
	historyOpen: boolean;
	isSubmitting: boolean;
	prompt: string;
	requestError: string | null;
	setHistoryOpen: (isOpen: boolean) => void;
	setPrompt: (prompt: string) => void;
	startNewChat: () => void;
	turns: ChatTurn[];
};

const [AiChatManagementProvider, useAiChat] =
	createProvider<AiChatManagementProps>('AiChatProvider');

export { useAiChat };

type AiChatProviderProps = {
	children: React.ReactNode;
};

export const AiChatProvider = ({ children }: AiChatProviderProps) => {
	const dispatch = useAppDispatch();
	const threadId = useAppSelector(selectActiveThreadId);
	const turns = useAppSelector(selectChatTurns);
	const [invokeWingAgent, { isLoading: isSubmitting, reset: resetRequest }] =
		useInvokeWingAgentMutation();
	const [prompt, setPrompt] = React.useState('');
	const [announcement, setAnnouncement] = React.useState('');
	const [requestError, setRequestError] = React.useState<string | null>(null);
	const [historyOpen, setHistoryOpen] = React.useState(false);
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

	const appendPrompt = React.useCallback(
		async (nextPrompt: string, focusResponse = false) => {
			const trimmedPrompt = nextPrompt.trim();
			if (!trimmedPrompt || isSubmitting) return;

			setRequestError(null);
			setAnnouncement('Wealth Wing AI is working on your question');

			try {
				const response = await invokeWingAgent({
					agent_profile: 'insights',
					message: trimmedPrompt,
					...(threadId ? { thread_id: threadId } : {})
				}).unwrap();

				if (focusResponse) pendingFocusIdRef.current = response.turn_id;
				dispatch(turnCompleted({ prompt: trimmedPrompt, response }));
				setPrompt('');
				setHistoryOpen(false);
				setAnnouncement(`Wealth Wing AI response ready for: ${trimmedPrompt}`);
			} catch {
				setRequestError(
					'We could not send your question. Check your connection and try again.'
				);
				setAnnouncement('Wealth Wing AI could not answer your question');
			}
		},
		[dispatch, invokeWingAgent, isSubmitting, threadId]
	);

	const startNewChat = React.useCallback(() => {
		if (isSubmitting) return;

		dispatch(chatCleared());
		resetRequest();
		setPrompt('');
		setRequestError(null);
		setHistoryOpen(false);
		setAnnouncement('New chat started');
		window.requestAnimationFrame(() => composerRef.current?.focus());
	}, [dispatch, isSubmitting, resetRequest]);

	const managementProps = React.useMemo(
		(): AiChatManagementProps => ({
			announcement,
			appendPrompt,
			composerRef,
			feedEndRef,
			historyOpen,
			isSubmitting,
			prompt,
			requestError,
			setHistoryOpen,
			setPrompt,
			startNewChat,
			turns
		}),
		[
			announcement,
			appendPrompt,
			historyOpen,
			isSubmitting,
			prompt,
			requestError,
			startNewChat,
			turns
		]
	);

	return <AiChatManagementProvider {...managementProps}>{children}</AiChatManagementProvider>;
};
