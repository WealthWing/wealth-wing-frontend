import { Box, Button, Flex, Form, FormControl, Heading, Input, Text } from '@wealth-wing/tayo';
import { signIn } from 'aws-amplify/auth';
import { useForm } from 'react-hook-form';
import { useAuth } from 'router/layout-management';

const userName = import.meta.env.VITE_DEMO_USERNAME;
const userPassword = import.meta.env.VITE_DEMO_USER_PASSWORD;

type FormValues = {
	email: string;
	password: string;
};

export const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>();
	const { setAuthState } = useAuth();

	const onSubmit = async (data: FormValues) => {
		try {
			const user = await signIn({
				username: data.email,
				password: data.password
			});
			if (user.isSignedIn) {
				setAuthState('signedIn');
			}
		} catch (error) {
			console.error('Error signing in:', error);
		}
	};

	const demoSignIn = async () => {
		try {
			const user = await signIn({
				username: userName,
				password: userPassword
			});
			if (user.isSignedIn) {
				setAuthState('signedIn');
			}
		} catch (error) {
			console.error('Error signing in:', error);
		}
	};

	return (
		<Box
			aria-label="Sign In"
			tag="section"
			width="100%"
			backgroundColor="cardBackground100"
			borderRadius="radiusDefault"
			boxShadow="default200"
			padding="s40"
		>
			<Form onSubmit={handleSubmit(onSubmit)} id="sign-in-form">
				<Flex direction="column" gap="s20">
					<Flex direction="column" gap="s32">
						<Flex direction="column" gap="s8">
							<Heading font="h2" tag="h2">
								Welcome Back
							</Heading>
							<Text font="lg" color="textSecondary">
								Sign in to continue to your dashboard.
							</Text>
						</Flex>
						<Flex direction="column" gap="s16">
							<FormControl label="Email" error={errors.email?.message} required>
								<Input
									{...register('email', {
										required: 'Email is required'
									})}
									id="email"
									type="email"
									placeholder="Enter your email"
								/>
							</FormControl>
							<FormControl label="Password" error={errors.password?.message} required>
								<Input
									{...register('password', {
										required: 'Password is required'
									})}
									id="password"
									type="password"
									placeholder="Enter your password"
								/>
							</FormControl>
						</Flex>
					</Flex>
					<Button variant="primary" format="regular" isFullWidth type="submit">
						Sign In
					</Button>
					<Button
						variant="secondary"
						format="regular"
						isFullWidth
						type="button"
						onClick={demoSignIn}
					>
						Demo
					</Button>
				</Flex>
			</Form>
		</Box>
	);
};
