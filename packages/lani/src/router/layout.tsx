import { Flex } from '@wealth-wing/tayo';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { AppWrapper } from 'components/app-wrapper';
import { GeneralLoader } from 'components/general-loader';
import { Main } from 'components/main';
import { Sidebar } from 'components/sidebar';
import { sidebar } from 'components/sidebar.styles';
import { SidebarButton, SidebarLink } from 'components/sidebar-link';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { setUserData, useLazyUserDataQuery } from 'redux/auth';
import { useAppDispatch } from 'redux/hooks';
import { AuthController } from 'router/auth/auth-controller';
import { AuthProvider, AuthProviderProps, AuthState } from 'router/layout-management';

export const Layout = () => {
	const [authState, setAuthState] = React.useState<AuthState>('verifying');

	const dispatch = useAppDispatch();
	const [getUserInfo] = useLazyUserDataQuery();

	React.useEffect(() => {
		let cancelled = false;

		(async () => {
			try {
				const user = await getCurrentUser();
				if (!user) throw new Error('No user');

				const resp = await getUserInfo().unwrap();
				if (cancelled) return;

				dispatch(setUserData(resp));
				setAuthState('signedIn');
			} catch {
				try {
					await signOut({ global: true });
				} catch {
					console.error('Error signing out');
				}
				if (!cancelled) setAuthState('signIn');
			}
		})();

		return () => {
			cancelled = true;
		};
	}, [dispatch, getUserInfo, authState]);

	const handleSignOut = React.useCallback(async () => {
		try {
			await signOut({ global: true });
		} finally {
			setAuthState('signIn');
		}
	}, []);

	const authContextValue: AuthProviderProps = React.useMemo(
		() => ({ authState, setAuthState }),
		[authState]
	);

	return (
		<AuthProvider {...authContextValue}>
			<AppWrapper>
				{authState === 'verifying' && <GeneralLoader>Loading...</GeneralLoader>}
				{authState === 'signedIn' && (
					<>
						<Sidebar>
							<Flex justifyContent="space-between" css={{ height: '100%' }}>
								<ul role="menubar" css={sidebar.top}>
									<li>
										<SidebarLink
											iconName="switch-horizontal"
											label="Transactions"
											to="/"
										/>
									</li>
									<li>
										<SidebarLink
											iconName="credit-card"
											label="Accounts"
											to="/accounts"
										/>
									</li>
								</ul>
								<SidebarButton
									iconName="log-out"
									onClick={handleSignOut}
									aria-label="Sign out"
								/>
							</Flex>
						</Sidebar>
						<Main>
							<Outlet />
						</Main>
					</>
				)}
				{authState !== 'signedIn' && authState !== 'verifying' && <AuthController />}
			</AppWrapper>
		</AuthProvider>
	);
};
