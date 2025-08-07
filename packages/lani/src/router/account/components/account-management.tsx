import { createProvider } from '@wealth-wing/tayo';

export type AccountProviderProps = {
	isLeftModalOpen: boolean;
	onLeftModalOpen: (id: string) => void;
	onLeftModalClose: () => void;
};

export const [AccountProvider, useJobs] = createProvider<AccountProviderProps>('AccountProvider');
