import {
	Box,
	Button,
	Flex,
	Icon,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Text
} from '@wealth-wing/tayo';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDeleteJobMutation } from 'redux/job-queries';

type DeleteModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const JobDeletionModal = ({ isOpen, onClose }: DeleteModalProps) => {
	const { jobId } = useParams();
	const [deleteJob] = useDeleteJobMutation();

	const handleDelete = () => {
		deleteJob({ projectId: jobId || '' });
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} variant="floatingsmall" canClose>
			<ModalHeader title="Delete Job" />
			<ModalBody>
				<Box padding="s20" border="default" borderColor="red80" borderRadius="radiusMedium">
					<Flex direction="row" alignItems="center" gap="s8">
						<Icon name="warning" size="s20" color="red80" />
						<Flex>
							<Text font="lg">Are you sure you want to delete this job?</Text>
							<Text font="md" color="textSecondary">
								Deleting a job will remove all associated scopes and expenses. This
								action cannot be undone.
							</Text>
						</Flex>
					</Flex>
				</Box>
			</ModalBody>
			<ModalFooter>
				<Button format="outline" variant="tertiary" onClick={onClose}>
					Close
				</Button>
				<Button
					format="regular"
					variant="danger"
					onClick={handleDelete}
					form="create-job-form"
				>
					Delete Job
				</Button>
			</ModalFooter>
		</Modal>
	);
};
