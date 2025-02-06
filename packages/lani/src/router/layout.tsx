import { Icon } from '@wealth-wing/tayo';
import { AppWrapper } from 'components/app-wrapper';
import { Main } from 'components/main';
import { Sidebar } from 'components/sidebar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<AppWrapper>
			<Sidebar>
				<Icon name="folder-plus" size="s24" />
			</Sidebar>
			<Main>
				<Outlet />
			</Main>
		</AppWrapper>
	);
};
