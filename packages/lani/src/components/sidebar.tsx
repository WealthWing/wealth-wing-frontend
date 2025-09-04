import { Flex, Icon } from '@wealth-wing/tayo';
import { sidebar } from 'components/sidebar.styles';
import React from 'react';

type SidebarProps = {
	children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
	return (
		<nav role="navigation" aria-label="Main Menu" css={sidebar.root}>
			<Flex direction="column" alignItems="center" gap="s8">
				<Icon name="graph" size="s64" />
				<div css={sidebar.separator} />
			</Flex>
			{children}
		</nav>
	);
};
