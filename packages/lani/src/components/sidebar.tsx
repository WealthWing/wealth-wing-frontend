import { Flex, Heading } from '@wealth-wing/tayo';
import { sidebar } from 'components/sidebar.styles';
import React from 'react';

type SidebarProps = {
	children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
	return (
		<nav role="navigation" aria-label="Main Menu" css={sidebar.root}>
			<Flex direction="column" alignItems="center" gap="s8">
				<Heading tag="h6" font="h4" color="textPrimary">
					WW
				</Heading>
				<div css={sidebar.separator} />
			</Flex>
			{children}
		</nav>
	);
};
