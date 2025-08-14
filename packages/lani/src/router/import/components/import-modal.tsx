import { Modal, ModalHeader } from '@wealth-wing/tayo';
import React from 'react';
import { ImportProvider, ImportStep, useImport } from 'router/import/components/import-management';
import { ImportAccountSelect } from 'router/import/components/import-steps/import-account-selet';
import { ImportDropZone } from 'router/import/components/import-steps/import-drop-zone';
/* 
steps 
 1 chose account
 2 select file - drop zone
 3 preview file - file data maybe preview
 4 upload 
*/

const renderActiveStep: Record<ImportStep, React.ReactNode> = {
	'select-account': <ImportAccountSelect />,
	'file-upload': <ImportDropZone />,
	preview: <ImportAccountSelect />,
	success: <ImportAccountSelect />
};

const ImportModalContent = () => {
	const { activeStep, isImportOpen, onImportClose } = useImport();
	return (
		<Modal isOpen={isImportOpen} onClose={onImportClose} variant="floatingmedium">
			<ModalHeader title="Import File" />
			{renderActiveStep[activeStep]}
		</Modal>
	);
};

type ImportModalProps = {
	isOpen: boolean;
	onClose: () => void;
	defaultAccountId?: string | null;
};

export const ImportModal = ({ isOpen, onClose, defaultAccountId }: ImportModalProps) => {
	return (
		<ImportProvider
			isImportOpen={isOpen}
			onImportClose={onClose}
			defaultAccountId={defaultAccountId}
		>
			<ImportModalContent />
		</ImportProvider>
	);
};
