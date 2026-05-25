import type * as React from 'react';
import type { Interpolation, Theme } from '@emotion/react';
import type { IconName } from '@wealth-wing/tayo/src/icon/generated';
import type { IconSize } from '@wealth-wing/tayo/src/icon/icon.definitions';

type CtaLinkBase = {
	children: React.ReactNode;
	css?: Interpolation<Theme>;
	iconName?: IconName;
	iconSize?: IconSize;
};

type CtaLinkAsLink = CtaLinkBase &
	Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
		as?: 'link';
		href: string;
	};

type CtaLinkAsButton = CtaLinkBase &
	Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
		as: 'button';
		href?: never;
	};

export type CtaLinkProps = CtaLinkAsLink | CtaLinkAsButton;
