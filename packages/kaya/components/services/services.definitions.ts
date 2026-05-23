import { IconName } from '@wealth-wing/tayo';

export type CapabilityItem = {
	icon: IconName;
	title: string;
	description: string;
	tags: string[];
};

export const CAPABILITIES: CapabilityItem[] = [
	{
		icon: 'grid',
		title: 'High-Density UI & Dashboards',
		description:
			'Financial metrics, live charts, and data-heavy interfaces built for clarity under load. No generic templates — every layout is reasoned from the data model.',
		tags: ['Financial metrics', 'Real-time charts', 'Complex tables']
	},
	{
		icon: 'switch-horizontal',
		title: 'Full-Stack Automation',
		description:
			'APIs, background jobs, auth, and infrastructure wired together without gaps. Hands off a stable, documented system — not a pile of half-finished services.',
		tags: ['FastAPI', 'Pipelines', 'Auth & DB']
	},
	{
		icon: 'settings',
		title: 'Agentic Workflows & RAG',
		description:
			'Multi-agent logic, retrieval-augmented generation, and LLM pipelines built to survive production edge cases — not just demo day.',
		tags: ['RAG pipelines', 'Multi-agent', 'LLM integration']
	}
];

export const TECH_STACK = {
	label: 'Primary Stack',
	items: ['React', 'TypeScript', 'Python / FastAPI', 'Vector Embeddings', 'AWS'],
	bestFor: 'Financial dashboards · Risk trackers · DB-to-LLM pipelines · Internal tools'
};

export const CAPABILITIES_HEADER = {
	eyebrow: 'Capabilities & Architecture',
	heading: 'What I build. End to end.'
};
