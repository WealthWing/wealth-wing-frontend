import { Flex, Modal, ModalBody, ModalFooter, ModalHeader } from '@wealth-wing/tayo';
import React from 'react';

type CreateJobModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const CreateJobModal = ({ isOpen, onClose }: CreateJobModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} variant="floatingsmall" canClose>
			<ModalHeader title="Create Job" />
			<ModalBody>Create Job Body</ModalBody>
			<ModalFooter>Create Job Footer</ModalFooter>
		</Modal>
	);
};
