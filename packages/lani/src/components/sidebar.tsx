import { Flex, Icon } from '@wealth-wing/tayo';
import { sidebar } from 'components/sidebar.styles';
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
				<Icon name="wealth-wing" size="s64" color="primary60" aria-hidden="true" />
				<div css={sidebar.separator} />
			</Flex>
			{children}
		</nav>
	);
};
