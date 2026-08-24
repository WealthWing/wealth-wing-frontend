import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';

import type { ChatTurn } from './chat.definitions';

const chatAdapter = createEntityAdapter<ChatTurn, string>({
	selectId: (turn) => turn.response.turn_id
});

const initialState = chatAdapter.getInitialState({
	threadId: null as string | null
});

export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		turnCompleted: (state, action: PayloadAction<ChatTurn>) => {
			if (state.threadId && state.threadId !== action.payload.response.thread_id) {
				chatAdapter.removeAll(state);
			}

			chatAdapter.setOne(state, action.payload);
			state.threadId = action.payload.response.thread_id;
		},
		chatCleared: (state) => {
			chatAdapter.removeAll(state);
			state.threadId = null;
		}
	}
});

const chatSelectors = chatAdapter.getSelectors<RootState>((state) => state.chat);

export const selectChatTurns = chatSelectors.selectAll;
export const selectActiveThreadId = (state: RootState) => state.chat.threadId;

export const { chatCleared, turnCompleted } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
