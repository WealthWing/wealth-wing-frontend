import { AppWrapper } from 'components/app-wrapper';
import { Main } from 'components/main';
import { Sidebar } from 'components/sidebar';
import { sidebar } from 'components/sidebar.styles';
import { SidebarLink } from 'components/sidebar-link';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<AppWrapper>
			<Sidebar>
				<ul role="menubar" css={sidebar.top}>
					<li>
						<SidebarLink iconName="folder-plus" label="Jobs" to="/jobs" />
					</li>
					<li>
						<SidebarLink iconName="calendar" label="Jobs" to="/#" />
					</li>
				</ul>
			</Sidebar>
			<Main>
				<Outlet />
			</Main>
		</AppWrapper>
	);
};
