import { Flex, IconButton } from '@wealth-wing/tayo';
import { pageRightPanel } from 'components/page-right-panel.style';
import React from 'react';

type PageRightPanelProps = {
	id: string;
	title?: string;
	children?: React.ReactNode;
	onClose?: () => void;
	isOpen?: boolean;
};

export const PageRightPanel = ({ id, title, children, onClose, isOpen }: PageRightPanelProps) => {
	const inertProps = !isOpen ? ({ inert: '', 'aria-hidden': true } as const) : {};

	return (
		<aside
			id={id}
			role="region"
			aria-labelledby={`${id}-title`}
			css={[pageRightPanel.root, isOpen ? pageRightPanel.open : pageRightPanel.closed]}
			{...inertProps}
		>
			{isOpen && (
				<>
					<header>
						<Flex direction="row" justifyContent="space-between" alignItems="center">
							<h2 id={`${id}-title`}>{title}</h2>
							{onClose && (
								<IconButton
									variant="tertiary"
									format="outline"
									onClick={onClose}
									aria-label="Close details"
									iconName="x"
									label="Close details"
								/>
							)}
						</Flex>
					</header>
					<div className="panel-body" aria-live="polite">
						{children}
					</div>
				</>
			)}
		</aside>
	);
};
