import { HTMLMotionProps } from 'framer-motion';

export type ModalTransition = Pick<HTMLMotionProps<'div'>, 'animate' | 'exit' | 'initial'>;

export type ModalVariant =
	| 'floatinglarge'
	| 'floatingmedium'
	| 'floatingsmall'
	| 'fullscreen'
	| 'slideleft';
