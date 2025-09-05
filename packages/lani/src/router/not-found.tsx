import { Button, CenterContent, Flex, Heading } from '@wealth-wing/tayo';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
	const navigate = useNavigate();

	return (
		<CenterContent height="100vh">
			<Flex justifyContent="center" alignItems="center">
				<Heading tag="h1" font="h1" color="textPrimary">
					Page Not Found
				</Heading>
				<Button
					variant="tertiary"
					format="text"
					size="medium"
					onClick={() => navigate('/')}
				>
					Back to summary
				</Button>
			</Flex>
		</CenterContent>
	);
};
