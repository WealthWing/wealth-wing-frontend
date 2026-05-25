import type { Node, Edge } from '@xyflow/react';
import { theme } from '@wealth-wing/tayo';

export type FlowNodeData = {
	label: string;
	variant: 'source' | 'process' | 'output' | 'database' | 'realm';
};

export type FlowNode = Node<FlowNodeData>;
export type FlowEdge = Edge;

export type MetricItem = {
	key: string;
	value: string;
};

export type ArchitectureTrack = {
	id: 'ui' | 'fullstack' | 'ai';
	tabLabel: string;
	coreFocus: string;
	stackItems: string[];
	metrics: MetricItem[];
	bestUsedFor: string;
	flowNodes: FlowNode[];
	flowEdges: FlowEdge[];
};

export const ARCHITECTURE_TRACKS: ArchitectureTrack[] = [
	{
		id: 'ui',
		tabLabel: 'Track 1: High-Density UI',
		coreFocus:
			'Taking legacy React apps and making them fast, maintainable, and something a new developer can actually work in.',
		stackItems: ['React', 'TypeScript', 'Vite', 'Monorepo', 'Shared Design Systems'],
		metrics: [
			{ key: 'DEV', value: '−40% dev builds via Vite' },
			{ key: 'PROD', value: '−30% production build size' }
		],
		bestUsedFor:
			'Clean conversions of brittle legacy architectures into type-safe functional systems with lightweight state patterns.',
		flowNodes: [
			{
				id: 'tokens',
				type: 'sourceNode',
				position: { x: 0, y: 0 },
				data: { label: 'Shared Design Tokens', variant: 'source' }
			},
			{
				id: 'components',
				type: 'sourceNode',
				position: { x: 240, y: 0 },
				data: { label: 'UI Components', variant: 'source' }
			},
			{
				id: 'vite',
				type: 'processNode',
				position: { x: 120, y: 120 },
				data: { label: 'Vite Build Cache', variant: 'process' }
			},
			{
				id: 'client',
				type: 'outputNode',
				position: { x: 120, y: 240 },
				data: { label: 'Performant Client View', variant: 'output' }
			}
		],
		flowEdges: [
			{
				id: 'e-tokens-vite',
				source: 'tokens',
				target: 'vite',
				type: 'smoothstep',
				animated: true
			},
			{
				id: 'e-components-vite',
				source: 'components',
				target: 'vite',
				type: 'smoothstep',
				animated: true
			},
			{
				id: 'e-vite-client',
				source: 'vite',
				target: 'client',
				type: 'smoothstep',
				animated: true
			}
		]
	},
	{
		id: 'fullstack',
		tabLabel: 'Track 2: Full-Stack',
		coreFocus:
			'Fixing slow APIs and backend processing times without requiring the frontend to change.',
		stackItems: ['FastAPI', 'Node.js', 'PostgreSQL', 'SQLAlchemy', 'Docker'],
		metrics: [
			{ key: 'LATENCY', value: '~5 min → 1–2 min processing' },
			{ key: 'API', value: 'Zero disruptive UI changes' }
		],
		bestUsedFor:
			'Frontend-friendly APIs that reshape database query responses with immediate performance gains and zero rework on the client side.',
		flowNodes: [
			// Realm labels
			{
				id: 'fs-realm-client',
				type: 'realmLabelNode',
				position: { x: 0, y: -70 },
				data: { label: 'CLIENT REALM · Next.js / Edge', variant: 'realm' }
			},
			{
				id: 'fs-realm-server',
				type: 'realmLabelNode',
				position: { x: 360, y: -70 },
				data: { label: 'SERVER REALM · FastAPI / Cloud', variant: 'realm' }
			},
			// Client column
			{
				id: 'fs-client-iface',
				type: 'sourceNode',
				position: { x: 0, y: 0 },
				data: { label: 'Client Interface', variant: 'source' }
			},
			{
				id: 'fs-redux',
				type: 'processNode',
				position: { x: 0, y: 140 },
				data: { label: 'Redux · Client State', variant: 'process' }
			},
			{
				id: 'fs-live-ui',
				type: 'outputNode',
				position: { x: 0, y: 280 },
				data: { label: 'Live Real-Time UI', variant: 'output' }
			},
			// Server column
			{
				id: 'fs-auth',
				type: 'processNode',
				position: { x: 360, y: 0 },
				data: { label: 'Secure Auth Router', variant: 'process' }
			},
			{
				id: 'fs-biz-logic',
				type: 'processNode',
				position: { x: 360, y: 140 },
				data: { label: 'Business Logic Layer', variant: 'process' }
			},
			{
				id: 'fs-redis',
				type: 'processNode',
				position: { x: 290, y: 280 },
				data: { label: 'Redis / Celery', variant: 'process' }
			},
			{
				id: 'fs-postgres',
				type: 'databaseNode',
				position: { x: 460, y: 280 },
				data: { label: 'PostgreSQL DB', variant: 'database' }
			}
		],
		flowEdges: [
			// Client Interface → Zustand (vertical, client column)
			{
				id: 'fs-ci-redux',
				source: 'fs-client-iface',
				target: 'fs-redux',
				type: 'smoothstep',
				animated: true
			},
			// Redux ↔ Business Logic (bidirectional cross-realm REST / data sync)
			{
				id: 'fs-redux-biz',
				source: 'fs-redux',
				target: 'fs-biz-logic',
				sourceHandle: 'right-source',
				targetHandle: 'left-target',
				type: 'smoothstep',
				animated: true,
				markerStart: { type: 'arrowclosed' as const },
				label: 'REST  ↔  Data Mutate',
				labelStyle: { fontSize: '9px', fill: theme.color.textSecondary },
				labelBgStyle: { fill: theme.color.cardBackground80, fillOpacity: 0.9 },
				labelBgPadding: [3, 6] as [number, number],
				labelBgBorderRadius: 3
			},
			// Auth Router → Business Logic (vertical, server column)
			{
				id: 'fs-auth-biz',
				source: 'fs-auth',
				target: 'fs-biz-logic',
				type: 'smoothstep',
				animated: true
			},
			// Business Logic → Redis (fan-out left)
			{
				id: 'fs-biz-redis',
				source: 'fs-biz-logic',
				target: 'fs-redis',
				type: 'smoothstep',
				animated: true
			},
			// Business Logic → PostgreSQL (fan-out right)
			{
				id: 'fs-biz-postgres',
				source: 'fs-biz-logic',
				target: 'fs-postgres',
				type: 'smoothstep',
				animated: true
			},
			// Redis → Live Real-Time UI (SSE stream, cross-realm)
			{
				id: 'fs-redis-live',
				source: 'fs-redis',
				target: 'fs-live-ui',
				sourceHandle: 'left-source',
				targetHandle: 'right-target',
				type: 'smoothstep',
				animated: true,
				label: 'SSE Stream',
				labelStyle: { fontSize: '9px', fill: theme.color.textSecondary },
				labelBgStyle: { fill: theme.color.cardBackground80, fillOpacity: 0.9 },
				labelBgPadding: [3, 6] as [number, number],
				labelBgBorderRadius: 3
			}
		]
	},
	{
		id: 'ai',
		tabLabel: 'Track 3: AI Workflows',
		coreFocus:
			'Layering contextual data execution, vector loops, and robust AI orchestration directly into existing apps.',
		stackItems: ['LLM Providers', 'RAG', 'Vector Embeddings', 'Copilot Guardrails'],
		metrics: [
			{ key: 'QUALITY', value: 'Deterministic structural code output' },
			{ key: 'SAFETY', value: 'Isolated client prompts from vector stores' }
		],
		bestUsedFor:
			'Multi-agent logic, retrieval-augmented generation, and LLM pipelines built to survive production edge cases — not just demo day.',
		flowNodes: [
			{
				id: 'prompt',
				type: 'sourceNode',
				position: { x: 110, y: 0 },
				data: { label: 'Raw User Prompt', variant: 'source' }
			},
			{
				id: 'vector',
				type: 'processNode',
				position: { x: 110, y: 100 },
				data: { label: 'Vector Embedding Retrieval', variant: 'process' }
			},
			{
				id: 'llm',
				type: 'processNode',
				position: { x: 110, y: 200 },
				data: { label: 'LLM Orchestration Guardrails', variant: 'process' }
			},
			{
				id: 'agent',
				type: 'processNode',
				position: { x: 110, y: 300 },
				data: { label: 'Tool Execution Agent', variant: 'process' }
			},
			{
				id: 'safe-output',
				type: 'outputNode',
				position: { x: 110, y: 400 },
				data: { label: 'Safe Structural Output', variant: 'output' }
			}
		],
		flowEdges: [
			{
				id: 'e-prompt-vector',
				source: 'prompt',
				target: 'vector',
				type: 'smoothstep',
				animated: true
			},
			{
				id: 'e-vector-llm',
				source: 'vector',
				target: 'llm',
				type: 'smoothstep',
				animated: true
			},
			{
				id: 'e-llm-agent',
				source: 'llm',
				target: 'agent',
				type: 'smoothstep',
				animated: true
			},
			{
				id: 'e-agent-output',
				source: 'agent',
				target: 'safe-output',
				type: 'smoothstep',
				animated: true
			}
		]
	}
];

export const ARCHITECTURE_HEADER = {
	eyebrow: 'Capabilities & Architecture',
	heading: 'Three ways I get involved — and what each one produces.',
	subheading: 'Pick the track closest to your problem. The metrics are from real projects.'
};
