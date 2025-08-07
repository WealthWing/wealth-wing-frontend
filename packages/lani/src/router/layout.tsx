import { Flex } from '@wealth-wing/tayo';
import { getCurrentUser, /* signIn, */ signOut } from 'aws-amplify/auth';
import { AppWrapper } from 'components/app-wrapper';
import { Main } from 'components/main';
import { Sidebar } from 'components/sidebar';
import { sidebar } from 'components/sidebar.styles';
import { SidebarButton, SidebarLink } from 'components/sidebar-link';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthController } from 'router/auth/auth-controller';

export const Layout = () => {
	const [isSignedin, setIsSignedin] = React.useState(false);
	const [shouldVerifyUser, setShouldVerifyUser] = React.useState(false);

	React.useEffect(() => {
		const checkUser = async () => {
			try {
				const user = await getCurrentUser();

				if (user) {
					setIsSignedin(true);
				}
			} catch (error) {
				signOut({ global: true });
			}
		};

		checkUser();
	}, [shouldVerifyUser]);

	const handleSignOut = () => {
		signOut({ global: true });
		setIsSignedin(false);
	};

	return isSignedin ? (
		<AppWrapper>
			<Sidebar>
				<Flex justifyContent="space-between" css={{ height: '100%' }}>
					<ul role="menubar" css={sidebar.top}>
						<li>
							<SidebarLink iconName="credit-card" label="Accounts" to="/accounts" />
						</li>
						<li>
							<SidebarLink iconName="folder-plus" label="Jobs" to="/jobs" />
						</li>
					</ul>
					<SidebarButton iconName="log-out" onClick={handleSignOut} />
				</Flex>
			</Sidebar>
			<Main>
				<Outlet />
			</Main>
		</AppWrapper>
	) : (
		<AuthController setShouldVerifyUser={setShouldVerifyUser} />
	);
};
