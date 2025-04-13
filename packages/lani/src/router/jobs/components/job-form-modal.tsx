import {
	Button,
	Form,
	FormControl,
	Input,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader
} from '@wealth-wing/tayo';
import { CreateJobRequest } from 'data/api-definitions';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

export type JobFormValues = CreateJobRequest;

type JobModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (data: JobFormValues) => void;
	isLoading?: boolean;
	form: UseFormReturn<JobFormValues>;
	variant?: 'create' | 'edit';
};

export const JobFormModal = ({
	isOpen,
	onClose,
	onSubmit,
	form,
	isLoading,
	variant = 'create'
}: JobModalProps) => {
	const {
		formState: { errors },
		handleSubmit,
		register
	} = form;
	const isCreateModal = variant === 'create';
	return (
		<Modal isOpen={isOpen} onClose={onClose} variant="floatingsmall" canClose>
			<ModalHeader title={isCreateModal ? 'Create Job' : 'Edit job'} />
			<ModalBody>
				<Form onSubmit={handleSubmit(onSubmit)} id="create-job-form">
					<FormControl
						required
						label="Job Title"
						id="job-title"
						error={errors.project_name?.message}
					>
						<Input
							{...register('project_name', {
								required: { value: true, message: 'Job title is required' }
							})}
							placeholder="Enter Job Title"
						/>
					</FormControl>
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button format="outline" variant="tertiary" onClick={onClose} disabled={isLoading}>
					Close
				</Button>
				<Button
					format="regular"
					variant="primary"
					type="submit"
					form="create-job-form"
					disabled={isLoading}
				>
					{isCreateModal ? 'Create Job' : 'Update Job'}
				</Button>
			</ModalFooter>
		</Modal>
	);
};
