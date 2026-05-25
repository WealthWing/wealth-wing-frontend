import type { IconName } from '@wealth-wing/tayo/src/icon/generated';

export type TrustItem = {
	icon: IconName;
	label: string;
};

export const TRUST_ITEMS: TrustItem[] = [
	{ icon: 'flag', label: "You know what I'm working on, every day" },
	{ icon: 'settings', label: 'I cut scope before I cut quality' },
	{ icon: 'check-square', label: 'No black-box code — the next dev can read it' },
	{ icon: 'schedule', label: "I'm still available after launch" }
];
