import { Flex } from '@wealth-wing/tayo';
import { BackgroundSvg } from 'components/ilustrations/wealth-wing';
import { sidebar } from 'components/sidebar.styles';
import React from 'react';

type SidebarProps = {
	children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
	return (
		<nav role="navigation" aria-label="Main Menu" css={sidebar.root}>
			<Flex direction="column" alignItems="center" gap="s8">
				<BackgroundSvg height={60} width={80} />
				<div css={sidebar.separator} />
			</Flex>
			{children}
		</nav>
	);
};
