import { createProvider } from '../../providers/create-provider';

type SelectProviderProps = {
	currentMenuWidth: number;
	setCurrentMenuWidth: (width: number) => void;
};

export const [SelectProvider, useSelect] = createProvider<SelectProviderProps>('SelectProvider');
