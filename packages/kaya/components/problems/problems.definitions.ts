export type ProblemItem = {
	number: string;
	title: string;
	body: string;
};

export const PROBLEMS: ProblemItem[] = [
	{
		number: '01',
		title: 'Slow, Repetitive Workflows',
		body: "You're drowning in manual tasks and scattered tools. I build custom automations and internal apps to win your time back."
	},
	{
		number: '02',
		title: 'Hard-to-Maintain Apps',
		body: 'Codebases that are terrifying to update or hand off. I stabilise and refactor messy apps so you can ship new features safely.'
	},
	{
		number: '03',
		title: 'The "Spreadsheet" Ceiling',
		body: 'Your team relies on duct-taped spreadsheets for core operations. I turn those fragile workarounds into secure, fast web tools.'
	},
	{
		number: '04',
		title: 'AI Workflow Confusion',
		body: 'You want AI to help, but the tooling feels disjointed. I build pragmatic AI integrations that deliver real business value, not just hype.'
	}
];
