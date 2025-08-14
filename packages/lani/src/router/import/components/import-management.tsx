import { createProvider, OptionType, useStepper } from '@wealth-wing/tayo';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export type ImportFormValues = {
	account: OptionType;
	fileName: string;
	fileType: string;
	fileSize: number;
};

const importSteps = ['select-account', 'file-upload', 'preview', 'success'] as const;
export type ImportStep = (typeof importSteps)[number];

type ImportManagementProps = {
	activeStep: ImportStep;
	previousStep: ImportStep;
	onChangeStep: (step: ImportStep) => void;
	onImportClose: () => void;
	isImportOpen: boolean;
	accountId: string | null;
};

const [ImportProcessManager, useImport] = createProvider<ImportManagementProps>('Import');

export { useImport };

type ImportProviderProps = {
	children: React.ReactNode;
	onImportClose: () => void;
	isImportOpen: boolean;
	defaultAccountId?: string | null;
};

export const ImportProvider = ({
	children,
	isImportOpen,
	onImportClose,
	defaultAccountId
}: ImportProviderProps) => {
	// TODO: Confirm if account selection should be managed by form state or local state (accountId).
	const [accountId, setAccountId] = React.useState<string | null>(defaultAccountId || null);
	const { activeStep, changeSteps, previousStep } = useStepper<ImportStep>('file-upload');
	const form = useForm<ImportFormValues>();

	React.useEffect(() => {
		if (defaultAccountId) {
			setAccountId(defaultAccountId);
		}
	}, [defaultAccountId]);

	const importManagementProps = React.useMemo((): ImportManagementProps => {
		return {
			activeStep,
			onChangeStep: changeSteps,
			previousStep,
			isImportOpen,
			onImportClose,
			accountId
		};
	}, [accountId, activeStep, changeSteps, isImportOpen, onImportClose, previousStep]);

	return (
		<ImportProcessManager {...importManagementProps}>
			<FormProvider {...form}>{children}</FormProvider>
		</ImportProcessManager>
	);
};
