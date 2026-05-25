export type ProcessStep = {
	number: string;
	title: string;
	body: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
	{
		number: '01',
		title: 'The 48-Hour Parse',
		body: 'Turning vague notes into a clear architectural delivery plan.'
	},
	{
		number: '02',
		title: 'Building in public.',
		body: 'Working code in staging from day one. You see progress weekly, not at delivery.'
	},
	{
		number: '03',
		title: 'AI that actually works in production.',
		body: 'When AI fits the product, I build it to handle edge cases, bad inputs, and real data — not just the demo scenario.'
	},
	{
		number: '04',
		title: 'Clean handoff.',
		body: 'The code you receive has typed boundaries, documented decisions, and no landmines for the next developer.'
	}
];
