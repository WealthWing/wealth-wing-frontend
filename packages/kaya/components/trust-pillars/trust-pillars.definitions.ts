import { IconName } from '@wealth-wing/tayo';

export type TrustPillarItem = {
	icon: IconName;
	title: string;
	body: string;
};

export const TRUST_PILLARS: TrustPillarItem[] = [
	{
		icon: 'flag',
		title: 'Predictable Delivery',
		body: 'We define exact goals, timelines, and deliverables before a line of code is written. No bad surprises.'
	},
	{
		icon: 'check-square',
		title: 'Radical Transparency',
		body: "Plain-English updates every week. You'll never have to chase me down to ask what the status is."
	},
	{
		icon: 'alert-circle',
		title: 'Candid Advice',
		body: "I'll tell you when a feature isn't worth the cost, and propose faster, cheaper ways to get the same result."
	},
	{
		icon: 'settings',
		title: 'Future-Proof Code',
		body: 'I build clean, documented systems that your next hire will actually enjoy working with. No spaghetti code.'
	}
];
