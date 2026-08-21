import { Flex } from '@wealth-wing/tayo';
import { sidebar } from 'components/sidebar.styles';
import { SidebarLogo } from 'components/sidebar-logo';
import React from 'react';

type SidebarProps = {
	children: React.ReactNode;
	hideOnMobile?: boolean;
};

export const Sidebar = ({ children, hideOnMobile = false }: SidebarProps) => {
	return (
		<nav
			role="navigation"
			aria-label="Main Menu"
			css={[sidebar.root, hideOnMobile && sidebar.hiddenOnMobile]}
		>
			<Flex direction="column" alignItems="center" gap="s8">
				<SidebarLogo />
				<div css={sidebar.separator} />
			</Flex>
			{children}
		</nav>
	);
};
