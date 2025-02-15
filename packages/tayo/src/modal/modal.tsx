import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import * as uuid from 'uuid';

import { Box, Flex } from '../containers';
import { Heading } from '../heading';
import { IconButton } from '../icon-button';
import { createProvider } from '../providers';
import { modal, modalVariants } from './modal.styles';

type ModalTransition = Pick<HTMLMotionProps<'div'>, 'animate' | 'exit' | 'initial'>;

export type ModalVariant =
	| 'floatinglarge'
	| 'floatingmedium'
	| 'floatingsmall'
	| 'fullscreen'
	| 'slideleft';

const overlayTransition: ModalTransition = {
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	initial: { opacity: 0 }
};

const floatingTransition: ModalTransition = {
	animate: { opacity: 1, transform: 'translateY(0px)' },
	exit: { opacity: 0 },
	initial: { opacity: 0, transform: 'translateY(-60px)' }
};

const transitionDurations: Record<ModalVariant, number> = {
	floatingsmall: 0.3,
	floatingmedium: 0.3,
	floatinglarge: 0.3,
	fullscreen: 0.8,
	slideleft: 0.8
};

const transitions: Record<ModalVariant, ModalTransition> = {
	floatinglarge: floatingTransition,
	floatingmedium: floatingTransition,
	floatingsmall: floatingTransition,
	fullscreen: {
		animate: { opacity: 1, transform: 'translateY(0%)' },
		exit: { transform: 'translateY(100%)' },
		initial: { opacity: 0, transform: 'translateY(100%)' }
	},
	slideleft: {
		animate: { transform: 'translateX(0%)' },
		exit: { transform: 'translateX(100%)' },
		initial: { transform: 'translateX(100%)' }
	}
};

export type ModalProviderProps = {
	isOpen: boolean;
	onClose: () => void;
};

const [ModalProvider, useModal] = createProvider<ModalProviderProps>('Modal');

type ModalPortalProps = {
	children?: React.ReactNode;
};

const ModalPortal = ({ children }: ModalPortalProps) => {
	const container = document.querySelector('body');
	if (!container) {
		return null;
	}

	return createPortal(children, container);
};

export const ModalOverlay = () => {
	const { isOpen } = useModal();

	return (
		<AnimatePresence>
			{isOpen ? (
				<motion.div
					onClick={(e) => {
						e.stopPropagation();
					}}
					css={modal.overlay}
					transition={{ ease: 'easeInOut', duration: 0.3 }}
					{...overlayTransition}
				/>
			) : null}
		</AnimatePresence>
	);
};

type ModalProps = ModalProviderProps & {
	canClose?: boolean;
	children?: React.ReactNode;
	variant: ModalVariant;
	hasOverlay?: boolean;
	allowOverlayClose?: boolean;
};

export const Modal = ({
	isOpen,
	onClose,
	variant,
	allowOverlayClose = true,
	canClose = true,
	children,
	hasOverlay = true
}: ModalProps) => {
	const modalID: string = React.useMemo(() => uuid.v4(), []);
	const modalHeaderID = `${modalID}-header`;
	const modalBodyID = `${modalID}-body`;

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		event.stopPropagation();
		if (event.key === 'Escape' && canClose) {
			onClose();
		}
	};

	const handleCloseModal = (event?: React.MouseEvent) => {
		event?.stopPropagation();
		if (canClose) {
			onClose();
		}
	};
	const isFloating = variant.includes('floating');
	return (
		<ModalPortal>
			<ModalProvider isOpen={isOpen} onClose={handleCloseModal}>
				{hasOverlay && <ModalOverlay />}
				<AnimatePresence>
					<FocusLock returnFocus>
						{isOpen ? (
							<motion.div
								css={[
									modal.root,
									hasOverlay && modal.modalWithOverlay,
									!hasOverlay && modal.modalNoOverlay
								]}
								transition={{
									ease: 'easeInOut',
									duration: transitionDurations[variant]
								}}
								{...transitions[variant]}
								onClick={allowOverlayClose ? handleCloseModal : undefined}
								aria-modal="true"
								aria-labelledby={modalHeaderID}
								aria-describedby={modalBodyID}
							>
								<div role="dialog" aria-label="modal-dialog-window">
									<section
										css={[
											modal.modal,
											isFloating && modal.floating,
											modalVariants[variant]
										]}
										onKeyDown={handleKeyDown}
										onClick={(event) => event.stopPropagation()}
										role="presentation"
									>
										{children}
									</section>
								</div>
							</motion.div>
						) : null}
					</FocusLock>
				</AnimatePresence>
			</ModalProvider>
		</ModalPortal>
	);
};

type ModalHeaderProps = {
	title: React.ReactNode;
};

export const ModalHeader = ({ title }: ModalHeaderProps) => {
	const { onClose } = useModal();

	return (
		<Box padding="s16">
			<Flex direction="row" justifyContent="space-between">
				{title && (
					<header style={{ flex: 1 }}>
						<Heading font="h3" tag="h2">
							{title}
						</Heading>
					</header>
				)}
				<IconButton
					iconColor="black10"
					iconName="x"
					format="text"
					variant="tertiary"
					label="Close"
					onClick={onClose}
				/>
			</Flex>
		</Box>
	);
};

type ModalBodyProps = {
	children: React.ReactNode;
};

export const ModalBody = ({ children }: ModalBodyProps) => {
	return <div css={modal.body}>{children}</div>;
};

type ModalFooterProps = {
	children: React.ReactNode;
};

export const ModalFooter = ({ children }: ModalFooterProps) => {
	return <div css={modal.footer}>{children}</div>;
};
