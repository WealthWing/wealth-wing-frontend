import { Flex } from '@wealth-wing/tayo';
import { getCurrentUser, signIn, signOut } from 'aws-amplify/auth';
import React from 'react';

type AuthControllerProps = {
	setShouldVerifyUser: (verifyUser: boolean) => void;
};

export const AuthController = ({ setShouldVerifyUser }: AuthControllerProps) => {
	const signInUser = async () => {
		await signIn({
			username: 'erdo.shazy123@gmail.com',
			password: 'z#ts7adUGd0fL!4U'
		});
		setShouldVerifyUser(true);
	};
	return (
		<div>
			<button onClick={signInUser}>CLICK</button>
		</div>
	);
};
