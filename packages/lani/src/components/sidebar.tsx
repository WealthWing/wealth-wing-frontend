import { Flex, Text } from '@wealth-wing/tayo';
import { sidebar } from 'components/sidebar.styles';
import React from 'react';

type SidebarProps = {
	children: React.ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
	return (
		<div css={sidebar.root}>
			<Flex direction="column" alignItems="center" gap="s8">
				<Text font="lg">WW</Text>
				<div css={sidebar.separator} />
			</Flex>
			{children}
		</div>
	);
};
