import { Icon, IconName, ScreenReaderOnly } from '@wealth-wing/tayo';
import { sidebarLinkStyles } from 'components/sidebar-link.styles';
import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

type SidebarLinkProps = {
	iconName: IconName;
	label: string;
	to: NavLinkProps['to'];
};

export const SidebarLink = React.forwardRef<HTMLAnchorElement, SidebarLinkProps>(
	({ iconName, label, to }, ref) => {
		return (
			<NavLink ref={ref} to={to}>
				{({ isActive }) => (
					<span css={isActive ? sidebarLinkStyles.active : sidebarLinkStyles.root}>
						<Icon name={iconName} />
						<ScreenReaderOnly>
							<span>{label}</span>
						</ScreenReaderOnly>
					</span>
				)}
			</NavLink>
		);
	}
);
