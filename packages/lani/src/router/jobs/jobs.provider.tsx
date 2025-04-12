import { createProvider } from '@wealth-wing/tayo';

export type JobsProviderProps = {
	isLeftModalOpen: boolean;
	onLeftModalOpen: (id: string) => void;
	onLeftModalClose: () => void;
};

export const [JobsProvider, useJobs] = createProvider<JobsProviderProps>('JobsProvider');
