import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import { rightSidebar } from './right-sidebar.styles';

type RightSidebarProps = {
	children: React.ReactNode;
	isOpen: boolean;
};

export const RightSidebar = ({ children, isOpen }: RightSidebarProps) => {
	return (
		<div style={{ position: 'relative' }}>
			<AnimatePresence initial={false}>
				{isOpen ? (
					<motion.div
						initial={{ transform: 'translateX(100%)' }}
						animate={{ transform: 'translateX(0%)' }}
						exit={{ transform: 'translateX(100%)' }}
						css={rightSidebar.root}
					>
						{children}
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
};
