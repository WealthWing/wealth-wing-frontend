import { ButtonVariant } from '../button/base.definitions';
import { ColorCustomProperty } from '../theme';

export type BadgeVariant = ButtonVariant;

export type BadgeStyle = {
	color: ColorCustomProperty;
	backgroundColor: ColorCustomProperty;
};

export type BadgeIconAlignment = 'left' | 'right';
