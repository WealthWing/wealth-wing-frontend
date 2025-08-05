import { fetchAuthSession } from 'aws-amplify/auth';

export const getAuthTokens = async () => {
	try {
		const session = await fetchAuthSession();

		return {
			tokenId: session.tokens?.idToken?.toString(),
			accessToken: session.tokens?.accessToken.toString()
		};
	} catch (error) {
		throw new Error(`Error in getAuthTokens: ${error}`);
	}
};
