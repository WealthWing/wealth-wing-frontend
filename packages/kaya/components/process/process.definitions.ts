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
		title: 'Planner Execution',
		body: 'Clean React codebases with fast feedback via staging branches.'
	},
	{
		number: '03',
		title: 'Intelligent Layering',
		body: 'Integrating low-latency vector loops and custom AI agents.'
	},
	{
		number: '04',
		title: 'Raw Ownership',
		body: 'Zero technical debt. Modular, perfectly typed.'
	}
];
