import React from 'react';

import { createProvider } from '../providers';
import { toggle } from './toggle.styles';

type ToggleProviderProps = {
	activeIndex: number;
	onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
	onToggleItemClick: (index: number) => void;
};

const [ToggleProvider, useToggle] = createProvider<ToggleProviderProps>('Toggle');

export type ToggleProps = {
	activeIndex: number;
	children: React.ReactNode;
	onToggle: (index: number) => void;
	stretch?: boolean;
};

export const Toggle = ({ activeIndex, children, onToggle, stretch }: ToggleProps) => {
	const handleToggleItemClick = (index: number) => {
		onToggle(index);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		const childrenCount = React.Children.count(children);

		if (event.key === 'ArrowLeft' && activeIndex !== 0) {
			onToggle(activeIndex - 1);
		}

		if (event.key === 'ArrowRight' && activeIndex !== childrenCount - 1) {
			onToggle(activeIndex + 1);
		}

		return null;
	};
	return (
		<ToggleProvider
			activeIndex={activeIndex}
			onKeyDown={handleKeyDown}
			onToggleItemClick={handleToggleItemClick}
		>
			<div css={[toggle.container, stretch && toggle.fullWidth]}>
				{React.Children.map(children, (child, index) => {
					const element = child as React.ReactElement<ToggleItemProps>;
					return element ? React.cloneElement(element, { index, stretch }) : null;
				})}
			</div>
		</ToggleProvider>
	);
};

type ToggleItemProps = {
	title: string;
	index?: number;
	onClick?: () => void;
	stretch?: boolean;
};

export const ToggleItem = ({ title, index, onClick, stretch }: ToggleItemProps) => {
	const { activeIndex, onKeyDown, onToggleItemClick } = useToggle();

	const isActive = activeIndex === index;

	const handleClick = () => {
		if (isActive) {
			return;
		}

		if (onClick) {
			onClick();
		}
		onToggleItemClick(index ?? 0);
	};

	return (
		<button
			css={[toggle.button, isActive && toggle.activeButton, stretch && toggle.fullWidth]}
			onClick={handleClick}
			onKeyDown={onKeyDown}
			type="button"
		>
			{title}
		</button>
	);
};
