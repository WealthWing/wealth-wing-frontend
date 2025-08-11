import React from 'react';

import { createProvider } from '../providers';
import { Color, theme } from '../theme';
import { tab } from './tabs.style';

export type TabsProviderProps = {
	onTabChange: (tab: number) => () => void;
	activeTab: number;
};

const [TabsProvider, useTabs] = createProvider<TabsProviderProps>('Tabs');

export const TabPanels = ({ children }: { children: React.ReactNode }) => {
	const { activeTab } = useTabs();
	return (
		<div role="tabpanel" tabIndex={activeTab} css={tab.panels}>
			{React.Children.map(children, (child, index) => (activeTab === index ? child : null))}
		</div>
	);
};

type TabsListProps = {
	children: React.ReactNode;
};

export const TabsList = ({ children }: TabsListProps) => {
	return (
		<div css={tab.list}>
			{React.Children.map(children, (child, index) => {
				const element = child as React.ReactElement<TabsTriggerProps>;
				return typeof element === 'object'
					? React.cloneElement(element, { tabIndex: index })
					: element;
			})}
		</div>
	);
};

type TabsTriggerProps = {
	tabIndex?: number;
	label: string;
};

export const TabsTrigger = ({ tabIndex, label }: TabsTriggerProps) => {
	const { onTabChange, activeTab } = useTabs();
	const isActive = tabIndex === activeTab;
	return (
		<button
			css={[tab.button, isActive && tab.activeButton]}
			onClick={onTabChange(tabIndex ?? 0)}
		>
			{label}
		</button>
	);
};

type TabsPanelProps = {
	children: React.ReactNode;
};

export const TabsPanel = ({ children }: TabsPanelProps) => {
	return <div css={tab.panel}>{children}</div>;
};

type TabsProps = {
	children: React.ReactNode;
	defaultActiveTab?: number;
	backgroundColor?: Color;
};

export const Tabs = ({ children, defaultActiveTab, backgroundColor }: TabsProps) => {
	const [activeTab, setActiveTab] = React.useState(defaultActiveTab || 0);

	const handleTabChange = React.useCallback((newTab: number) => () => setActiveTab(newTab), []);

	return (
		<TabsProvider onTabChange={handleTabChange} activeTab={activeTab}>
			<div
				css={[
					tab.container,
					{ backgroundColor: backgroundColor ? theme.color[backgroundColor] : undefined }
				]}
			>
				{children}
			</div>
		</TabsProvider>
	);
};
