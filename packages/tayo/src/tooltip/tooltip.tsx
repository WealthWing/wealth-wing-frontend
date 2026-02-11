import {
	arrow,
	autoUpdate,
	flip,
	FloatingArrow,
	FloatingPortal,
	offset,
	Placement,
	safePolygon,
	shift,
	useDismiss,
	useFloating,
	useFocus,
	useHover,
	useId,
	useInteractions
} from '@floating-ui/react';
import {
	Children,
	cloneElement,
	forwardRef,
	MutableRefObject,
	ReactElement,
	ReactNode,
	RefObject,
	useRef,
	useState
} from 'react';
import { mergeRefs } from 'react-merge-refs';

import { createProvider } from '../providers';
import { Color, theme } from '../theme';
import { container, content } from './tooltip.styles';

type RenderReturnTooltip = {
	close: () => void;
	isOpen: boolean;
};

type TooltipProviderProps = ReturnType<typeof useFloating> &
	ReturnType<typeof useInteractions> & {
		arrowRef: MutableRefObject<null>;
		floatingId?: string;
		isOpen: boolean;
		setOpen: (open: boolean) => void;
	};

const [TooltipProvider, useTooltip] = createProvider<TooltipProviderProps>('Tooltip');
export { useTooltip };

export type TooltipProps = {
	children: ReactNode | ((renderReturn: RenderReturnTooltip) => ReactNode);
	closeDelay?: number;
	isInteractive?: boolean;
	placement?: Placement;
};

const arrowHeight = 4;
const gap = 8;

export const Tooltip = forwardRef(
	({ children, closeDelay = 100, isInteractive, placement = 'top' }: TooltipProps, ref) => {
		const [isOpen, setOpen] = useState(false);
		const arrowRef = useRef(null);

		const floatingId = useId();

		const floating = useFloating({
			placement,
			strategy: 'fixed',
			middleware: [
				offset(arrowHeight + gap),
				flip(),
				shift({ padding: 4 }),
				arrow({
					element: arrowRef
				})
			],
			open: isOpen,
			onOpenChange: setOpen,
			whileElementsMounted: autoUpdate
		});

		const hover = useHover(floating.context, {
			delay: { close: closeDelay },
			handleClose: isInteractive ? safePolygon() : null
		});
		const focus = useFocus(floating.context);
		const dismiss = useDismiss(floating.context, {
			escapeKey: true
		});

		const interactions = useInteractions([hover, focus, dismiss]);

		return (
			<TooltipProvider
				{...interactions}
				{...floating}
				arrowRef={arrowRef}
				floatingId={floatingId}
				isOpen={isOpen}
				setOpen={setOpen}
			>
				{typeof children === 'function'
					? children({ close: () => setOpen(false), isOpen })
					: Children.map(children, (child) => {
							const element = child as ReactElement;

							return element
								? cloneElement(element, { ...element.props, innerRef: ref })
								: null;
					  })}
			</TooltipProvider>
		);
	}
);

type TooltipTriggerProps = {
	children: ReactElement;
	preventDefault?: boolean;
	innerRef?: RefObject<unknown>;
};

/** Note: this component will provide aria-label, and aria-labelledby to its child */
export const TooltipTrigger = ({
	children,
	preventDefault = true,
	innerRef
}: TooltipTriggerProps) => {
	const { getReferenceProps, floatingId, isOpen, refs, setOpen } = useTooltip();

	return (
		<>
			{cloneElement(
				children,
				getReferenceProps({
					onClick(event) {
						if (!isOpen && preventDefault) {
							event.preventDefault();
							setOpen(true);
						}
					},
					ref: innerRef ? mergeRefs([refs.setReference, innerRef]) : refs.setReference,
					...children.props,
					'aria-label': 'Tooltip:',
					'aria-labelledby': isOpen ? floatingId : ''
				})
			)}
		</>
	);
};

type ToolTipContentProps = {
	children: ReactNode;
	disabled?: boolean;
	visible?: boolean;
	backgroundColor?: Extract<Color, 'cardBackground80' | 'cardBackground60'>;
};

export const TooltipContent = ({
	children,
	disabled,
	visible = true,
	backgroundColor = 'cardBackground60'
}: ToolTipContentProps) => {
	const { arrowRef, getFloatingProps, context, floatingId, floatingStyles, isOpen, refs } =
		useTooltip();

	return (
		<FloatingPortal>
			{isOpen && visible && !disabled && (
				<div
					css={container}
					id={floatingId}
					ref={refs.setFloating}
					role="tooltip"
					style={floatingStyles}
					{...getFloatingProps()}
				>
					<div css={content(backgroundColor)}>{children}</div>
					<FloatingArrow
						context={context}
						fill={theme.color[backgroundColor]}
						ref={arrowRef}
						tipRadius={1}
						width={16}
					/>
				</div>
			)}
		</FloatingPortal>
	);
};
