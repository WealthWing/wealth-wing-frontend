import { IconName } from '@wealth-wing/tayo';

export type ServiceItem = {
	icon: IconName;
	title: string;
	description: string;
};

export const SERVICES: ServiceItem[] = [
	{
		icon: 'grid',
		title: 'Modern websites',
		description: 'Fast, responsive, credible sites that represent your work.'
	},
	{
		icon: 'folder',
		title: 'Full-stack applications',
		description: 'Dashboards, portals, admin tools, APIs, auth, and data.'
	},
	{
		icon: 'settings',
		title: 'App improvements',
		description: 'Cleanup, bug fixes, performance, and feature work.'
	},
	{
		icon: 'switch-horizontal',
		title: 'Practical AI workflows',
		description: 'Document search, internal assistants, Copilot & Claude setup.'
	}
];
