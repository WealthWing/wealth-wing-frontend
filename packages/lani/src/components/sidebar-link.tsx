import { Icon, IconName, ScreenReaderOnly } from '@wealth-wing/tayo';
import { sidebarButtonStyles, sidebarLinkStyles } from 'components/sidebar-link.styles';
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

type SidebarButtonProps = {
	iconName: IconName;
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & SidebarButtonProps;

export const SidebarButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ iconName, ...rest }: SidebarButtonProps, ref) => (
		<button css={sidebarButtonStyles} ref={ref} {...rest}>
			<Icon name={iconName} />
		</button>
	)
);
