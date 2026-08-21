import { aiApiBase } from 'data/ai-api-base';
import { WingAgentRequest, WingAgentResponse } from 'data/api-definitions';

export const { useInvokeWingAgentMutation } = aiApiBase.injectEndpoints({
	endpoints: (builder) => ({
		invokeWingAgent: builder.mutation<WingAgentResponse, WingAgentRequest>({
			query: (params) => ({
				url: '/agents/wing/invoke',
				method: 'POST',
				body: JSON.stringify(params)
			})
		})
	})
});
