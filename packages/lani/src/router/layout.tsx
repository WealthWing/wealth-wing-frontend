import { Flex } from '@wealth-wing/tayo';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { AppWrapper } from 'components/app-wrapper';
import { Main } from 'components/main';
import { Sidebar } from 'components/sidebar';
import { sidebar } from 'components/sidebar.styles';
import { SidebarButton, SidebarLink } from 'components/sidebar-link';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { setUserData, useLazyUserDataQuery } from 'redux/auth';
import { useAppDispatch } from 'redux/hooks';
import { AuthController } from 'router/auth/auth-controller';

export const Layout = () => {
	const [isSignedin, setIsSignedin] = React.useState(false);
	const [shouldVerifyUser, setShouldVerifyUser] = React.useState(false);
	const dispatch = useAppDispatch();
	const [getUserInfo] = useLazyUserDataQuery();

	React.useEffect(() => {
		const checkUser = async () => {
			try {
				const user = await getCurrentUser();

				if (user) {
					getUserInfo()
						.unwrap()
						.then((resp) => {
							dispatch(setUserData(resp));
							setIsSignedin(true);
						});
				}
			} catch (error) {
				signOut({ global: true });
				setIsSignedin(false);
			}
		};

		checkUser();
	}, [dispatch, getUserInfo, shouldVerifyUser]);

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
							<SidebarLink
								iconName="switch-horizontal"
								label="Transactions"
								to="/transactions"
							/>
						</li>
						<li>
							<SidebarLink iconName="credit-card" label="Accounts" to="/accounts" />
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
