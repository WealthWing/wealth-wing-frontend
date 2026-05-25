export type FrictionItem = {
	trap: string;
	fix: string;
};

export const FRICTION_MATRIX: FrictionItem[] = [
	{
		trap: 'Long planning cycles before anything usable exists.',
		fix: 'I shape the scope, then move quickly into working software.'
	},
	{
		trap: 'Fragile UI state, janky interactions, and slow product flows.',
		fix: 'I build performance-aware interfaces with clean state architecture and stable interaction patterns.'
	},
	{
		trap: 'AI features that look impressive in demos but break in real workflows.',
		fix: 'I design AI workflows around retrieval quality, data boundaries, guardrails, and failure cases.'
	},
	{
		trap: 'Vague requirements passed from person to person until the result misses the point.',
		fix: 'I work directly with you to turn ambiguity into a clear technical path and shippable system.'
	}
];

export const FRICTION_LABELS = {
	trap: 'The Freelance / Agency Trap',
	fix: 'The Autonomous Resolution'
};

export const FRICTION_HEADER = {
	eyebrow: 'The Friction Matrix',
	heading: "You've hit the founder's ceiling.",
	sub: "These aren't edge cases. They're the default when hiring without the right fit."
};
