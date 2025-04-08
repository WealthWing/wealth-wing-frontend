/* eslint-disable no-nested-ternary */
import { css } from '@emotion/react';
import { StylesConfig } from 'react-select';

import { theme } from '../../theme';

export const option = css`
	background-color: ${theme.color.cardBackground80};
	color: ${theme.color.textSecondary};
`;

export const selectStyles = (menuWidth?: number): StylesConfig => ({
	container: (baseStyles) => ({
		...baseStyles,
		width: '100% !important'
	}),
	control: (baseStyles) => ({
		...baseStyles,
		backgroundColor: theme.color.cardBackground80,
		font: theme.font.sm,
		width: '100%',
		gap: theme.space.s8,
		padding: `${theme.space.s2} ${theme.space.s16}`,
		cursor: 'pointer',
		borderRadius: theme.borderRadius.radiusMedium
	}),
	singleValue: (baseStyles) => ({
		...baseStyles,
		color: theme.color.textPrimary
	}),
	menu: (baseStyles) => ({
		...baseStyles,
		backgroundColor: theme.color.cardBackground90,
		boxShadow: theme.shadow.default200,
		marginTop: theme.space.s4,
		left: `calc(-1 * ${theme.space.s8})`,
		minWidth: `${menuWidth}px`,
		width: 'unset'
	}),
	menuPortal: (baseStyles) => ({
		...baseStyles,
		zIndex: 110
	}),
	menuList: (baseStyles) => ({
		...baseStyles,
		paddingTop: theme.space.s4,
		paddingBottom: theme.space.s4
	}),

	indicatorsContainer: (baseStyles) => ({
		...baseStyles,
		gap: theme.space.s4,
		color: theme.color.black60,
		cursor: 'pointer'
	}),
	indicatorSeparator: (baseStyles) => ({
		...baseStyles,
		backgroundColor: theme.color.textPrimary,
		margin: `${theme.space.s8} 0`
	}),
	placeholder: (baseStyles, { isDisabled }) => ({
		...baseStyles,
		color: isDisabled ? theme.color.black60 : theme.color.black40,
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	}),
	option: (baseStyles, { isSelected, isDisabled: disabled, isFocused }) => {
		function getColor() {
			if (disabled) return theme.color.black40;
			if (isFocused && !isSelected) return theme.color.cardBackground60;
			if (isSelected) return theme.color.textPrimary;
			return theme.color.black10;
		}

		function getBackgroundColor() {
			if (disabled) return undefined;
			if (isFocused && !isSelected) return theme.color.cardBackground80;
			if (isSelected) return theme.color.cardBackground90;
			return undefined;
		}

		function getHoverColor() {
			if (disabled) return undefined;
			if (isSelected) return theme.color.textPrimary;
			return theme.color.textSecondary;
		}

		function getHoverBackgroundColor() {
			if (disabled) return undefined;
			if (isSelected) return theme.color.cardBackground100;
			return theme.color.cardBackground90;
		}

		const color = getColor();
		const backgroundColor = getBackgroundColor();

		return {
			...baseStyles,
			color,
			backgroundColor,
			backgroundImage: isSelected
				? `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M109.495 29.1716C111.057 30.7337 111.057 33.2663 109.495 34.8284L50.8285 93.4951C49.2664 95.0572 46.7337 95.0572 45.1716 93.4951L18.5049 66.8284C16.9428 65.2663 16.9428 62.7337 18.5049 61.1716C20.067 59.6095 22.5997 59.6095 24.1618 61.1716L48 85.0098L103.838 29.1716C105.4 27.6095 107.933 27.6095 109.495 29.1716Z' /%3E%3C/svg%3E")`
				: undefined,
			backgroundSize: isSelected ? '16px' : undefined,
			paddingLeft: '6px',
			backgroundRepeat: isSelected ? 'no-repeat' : undefined,
			backgroundPosition: isSelected ? '5px center' : undefined,
			padding: `${theme.space.s8} ${theme.space.s24}`,
			cursor: 'pointer',
			transition: 'background-color 0.1s',

			':hover': {
				backgroundColor: getHoverBackgroundColor(),
				color: getHoverColor()
			}
		};
	}
	/* 	valueContainer: () => css`
		gap: ${theme.space.s4};
	` */
});
