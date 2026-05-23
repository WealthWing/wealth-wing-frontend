export type FrictionItem = {
	trap: string;
	fix: string;
};

export const FRICTION_MATRIX: FrictionItem[] = [
	{
		trap: '3 weeks of Figma mockups, zero code shipped.',
		fix: 'High-fidelity execution straight into React — no design-to-dev hand-off lag.'
	},
	{
		trap: 'Fragile state, janky interactions, slow initial loads.',
		fix: 'Performance-first UI with clean state architecture and sub-2s load targets.'
	},
	{
		trap: 'AI features that hallucinate, fail on edge cases, or need constant babysitting.',
		fix: 'Deeply tested RAG pipelines and multi-agent logic built for production reliability.'
	},
	{
		trap: 'Vague spec handed to a dev agency — comes back unrecognisable.',
		fix: 'I own the ambiguity. Vague goal in → stable, reasoned architecture out.'
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
