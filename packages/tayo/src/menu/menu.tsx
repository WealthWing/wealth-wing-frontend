import React from 'react';

import { menu } from './menu.styles';

type MenuProps = Pick<React.HTMLAttributes<HTMLElement>, 'id'> & {
	children: React.ReactNode;
};

export const Menu = ({ children, id }: MenuProps) => {
	return (
		<ul role="menu" css={menu.root} id={id}>
			{children}
		</ul>
	);
};

type MenuItemProps = Pick<React.HTMLAttributes<HTMLButtonElement>, 'onClick'> & {
	children: React.ReactNode;
	isDisabled?: boolean;
};

const Item = ({ children, onClick, isDisabled }: MenuItemProps) => (
	<li css={menu.menuItem}>
		<button
			css={[menu.buttonLink, isDisabled && menu.menuDisabled]}
			disabled={isDisabled}
			onClick={onClick}
		>
			{children}
		</button>
	</li>
);

export const MenuItem = ({ children, onClick, isDisabled }: MenuItemProps) => {
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => onClick?.(event);

	return (
		<Item isDisabled={isDisabled} onClick={handleClick}>
			{children}
		</Item>
	);
};
