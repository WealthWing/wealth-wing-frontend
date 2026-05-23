export type ProcessStep = {
	number: string;
	title: string;
	body: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
	{
		number: '01',
		title: 'Understand',
		body: 'We clarify your business goals, target users, constraints, and what success looks like.'
	},
	{
		number: '02',
		title: 'Shape',
		body: 'I translate vague requirements into a concrete, scoped-down technical plan.'
	},
	{
		number: '03',
		title: 'Build',
		body: 'I write the code — handling both frontend polish and backend logic — with regular check-ins.'
	},
	{
		number: '04',
		title: 'Launch & Improve',
		body: 'We deploy safely, measure real-world impact, and iterate.'
	}
];
