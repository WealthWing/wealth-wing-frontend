import type { WingAgentResponse } from 'data/api-definitions';

export type ChatTurn = {
	prompt: string;
	response: WingAgentResponse;
};
