import { IconName } from '@wealth-wing/tayo';

export type TrustItem = {
	icon: IconName;
	label: string;
};

export const TRUST_ITEMS: TrustItem[] = [
	{ icon: 'flag', label: 'Transparent communication' },
	{ icon: 'settings', label: 'Pragmatic execution' },
	{ icon: 'check-square', label: 'Maintainable code' },
	{ icon: 'schedule', label: 'Reliable long-term support' }
];
