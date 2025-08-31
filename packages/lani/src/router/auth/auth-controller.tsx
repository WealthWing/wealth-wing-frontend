import { BarChart, Box, Flex, Heading, Icon, Text } from '@wealth-wing/tayo';
import { Section } from 'components/section';
import { AuthCardContainer } from 'router/auth/components/auth-card';
import { SignIn } from 'router/auth/sign-in';
import { useAuth } from 'router/layout-management';

export const AuthController = () => {
	const { authState } = useAuth();

	/* 	const signInUser = async () => {
		await signIn({
			username: 'erdo.shazy123@gmail.com',
			password: 'z#ts7adUGd0fL!4U'
		});
		setAuthState('verifying');
	}; */
	return (
		<Box width="100%" height="100%" padding="s20">
			<Flex direction="row" gap="s20" flex={1} css={{ height: '100%' }}>
				<Box width="100%" height="100%" padding="s20">
					<Flex
						direction="column"
						flex={1}
						gap="s20"
						justifyContent="center"
						css={{ height: '100%' }}
					>
						<Flex direction="row" gap="s4" alignItems="center">
							<Icon name="graph" size="s64" />
							<Flex gap="none" direction="column" justifyContent="center">
								<Heading font="h5" tag="h1">
									Wealth Wing
								</Heading>
								<Text font="sm" color="textSecondary">
									Personal Finance Management
								</Text>
							</Flex>
						</Flex>
						{authState === 'signIn' && <SignIn />}
					</Flex>
				</Box>
				<Box width="100%">
					<Flex direction="column" gap="s32" justifyContent="center">
						<Flex direction="column" gap="s8">
							<Heading tag="h2" font="h1">
								Take control of your finances
							</Heading>
							<Heading tag="h3" font="h5" color="textSecondary">
								Import. Track. Understand.
							</Heading>
							<Text>
								Easily import your bank statements, track every expense, and gain
								clear insights into your spending habits all in one place.
							</Text>
						</Flex>
						<AuthCardContainer />
						<Section title="Monthly Overview">
							<BarChart
								isCurrencyFormat
								css={{ width: '100%', minHeight: '230px' }}
								datasets={[
									{
										label: 'Monthly In',
										data: [100000, 200000, 150000],
										borderColor: '#36A2EB',
										backgroundColor: '#9BD0F5'
									},
									{
										label: 'Monthly Out',
										data: [50000, 100000, 75000],
										borderColor: '#FF6384',
										backgroundColor: '#FFB1C1'
									}
								]}
								labels={['Jan', 'Feb', 'Mar']}
							/>
						</Section>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};
