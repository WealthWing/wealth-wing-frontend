import { Button, CenterContent, Flex } from '@wealth-wing/tayo';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
	const navigate = useNavigate();

	return (
		<CenterContent height="100vh">
			<Flex justifyContent="center" alignItems="center">
				<div>Page Not Found</div>
				<Button variant="primary" format="light" onClick={() => navigate('/')}>
					Go Home
				</Button>
			</Flex>
		</CenterContent>
	);
};
