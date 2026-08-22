import { createProvider } from '@wealth-wing/tayo';
import * as React from 'react';
import {
	analystResponses,
	createSeededTurn,
	createTransactionSummaryTurn,
	getTopicForPrompt
} from 'router/ai/ai-chat.data';
import { ChatTurn } from 'router/ai/ai-chat.definitions';

export type SelectedConversation = 'current' | 'spending-summary' | null;

export type AiChatManagementProps = {
	announcement: string;
	appendPrompt: (nextPrompt: string, focusResponse?: boolean) => void;
	composerRef: React.RefObject<HTMLTextAreaElement | null>;
	feedEndRef: React.RefObject<HTMLDivElement | null>;
	historyOpen: boolean;
	prompt: string;
	selectedConversation: SelectedConversation;
	setHistoryOpen: (isOpen: boolean) => void;
	setPrompt: (prompt: string) => void;
	startNewChat: () => void;
	selectCurrentConversation: () => void;
	selectSummaryConversation: () => void;
	turns: ChatTurn[];
};

const [AiChatManagementProvider, useAiChat] =
	createProvider<AiChatManagementProps>('AiChatProvider');

export { useAiChat };

type AiChatProviderProps = {
	children: React.ReactNode;
};

export const AiChatProvider = ({ children }: AiChatProviderProps) => {
	const [turns, setTurns] = React.useState<ChatTurn[]>(() => [createSeededTurn()]);
	const [selectedConversation, setSelectedConversation] =
		React.useState<SelectedConversation>('current');
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
				kind: 'analyst',
				id,
				prompt: trimmedPrompt,
				response: analystResponses[topic]
			}
		]);
		setSelectedConversation('current');
		setPrompt('');
		setHistoryOpen(false);
		setAnnouncement(`Wealth Wing AI analysis ready for: ${trimmedPrompt}`);
		if (focusResponse) pendingFocusIdRef.current = id;
	}, []);

	const startNewChat = React.useCallback(() => {
		setTurns([]);
		setSelectedConversation(null);
		setPrompt('');
		setHistoryOpen(false);
		setAnnouncement('New chat started');
		window.requestAnimationFrame(() => composerRef.current?.focus());
	}, []);

	const selectCurrentConversation = React.useCallback(() => {
		const currentTurn = createSeededTurn();
		setTurns([currentTurn]);
		setSelectedConversation('current');
		setHistoryOpen(false);
		setAnnouncement('Current conversation selected');
		pendingFocusIdRef.current = currentTurn.id;
	}, []);

	const selectSummaryConversation = React.useCallback(() => {
		const summaryTurn = createTransactionSummaryTurn();
		setTurns([summaryTurn]);
		setSelectedConversation('spending-summary');
		setHistoryOpen(false);
		setAnnouncement('May through July spending summary selected');
		pendingFocusIdRef.current = summaryTurn.id;
	}, []);

	const managementProps = React.useMemo(
		(): AiChatManagementProps => ({
			announcement,
			appendPrompt,
			composerRef,
			feedEndRef,
			historyOpen,
			prompt,
			selectedConversation,
			setHistoryOpen,
			setPrompt,
			startNewChat,
			selectCurrentConversation,
			selectSummaryConversation,
			turns
		}),
		[
			announcement,
			appendPrompt,
			historyOpen,
			prompt,
			selectedConversation,
			startNewChat,
			selectCurrentConversation,
			selectSummaryConversation,
			turns
		]
	);

	return <AiChatManagementProvider {...managementProps}>{children}</AiChatManagementProvider>;
};
