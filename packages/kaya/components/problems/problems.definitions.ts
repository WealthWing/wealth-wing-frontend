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
		fix: 'I build interfaces that stay fast as the product grows — not ones that need to be rewritten six months later.'
	},
	{
		trap: 'AI features that look impressive in demos but break in real workflows.',
		fix: 'I design AI workflows around retrieval quality, data boundaries, and what happens when the model is wrong.'
	},
	{
		trap: 'Vague requirements passed from person to person until the result misses the point.',
		fix: 'I work directly with you to turn ambiguity into a clear technical path and shippable system.'
	}
];

export const FRICTION_LABELS = {
	trap: 'The Freelance / Agency Trap',
	fix: 'How I work instead'
};

export const FRICTION_HEADER = {
	eyebrow: 'Why Hires Go Wrong',
	heading: "What goes wrong when the person building your product doesn't own the outcome.",
	sub: "These aren't edge cases. They're the default when hiring without the right fit."
};
