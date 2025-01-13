import { Text } from '@wealth-wing/tayo';
import { AppWrapper } from 'components/app-wrapper';
import { Main } from 'components/main';
import { Sidebar } from 'components/sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<AppWrapper>
			<Sidebar>
				<Text font="lg">WW</Text>
			</Sidebar>
			<Main>
				<Outlet />
			</Main>
		</AppWrapper>
	);
};
