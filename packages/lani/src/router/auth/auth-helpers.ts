import { fetchAuthSession } from 'aws-amplify/auth';

export const getAuthTokens = async () => {
	try {
		console.log('try');
		const session = await fetchAuthSession();
		console.log(session, 'SESSION');
		return {
			tokenId: session.tokens?.idToken?.toString(),
			accessToken: session.tokens?.accessToken.toString()
		};
	} catch (error) {
		throw new Error(`Error in getAuthTokens: ${error}`);
	}
};
