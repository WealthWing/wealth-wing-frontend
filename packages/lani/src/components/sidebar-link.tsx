import { Icon, IconName } from '@wealth-wing/tayo';
import { sidebarLink } from 'components/sidebar-link.styles';
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
			<NavLink ref={ref} to={to} css={sidebarLink}>
				<Icon name={iconName} />
				<span>{label}</span>
			</NavLink>
		);
	}
);
