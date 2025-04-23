import {
	Button,
	DatePicker,
	Form,
	FormControl,
	Grid,
	Input,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader
} from '@wealth-wing/tayo';
import React from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

export type JobFormValues = {
	project_name: string;
	start_date?: Date;
	end_date?: Date;
};

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

	const handleClose = () => {
		onClose();
		form.reset();
	};

	return (
		<Modal isOpen={isOpen} onClose={handleClose} variant="floatingsmall" canClose>
			<ModalHeader title={isCreateModal ? 'Create Job' : 'Edit job'} />
			<ModalBody>
				<FormProvider {...form}>
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
						<Grid gap="s20" gridTemplateColumns="1fr 1fr">
							<DatePicker
								showIcon
								icon="calendar"
								maxDate={form.watch('end_date')}
								name="start_date"
								label="Start Date"
								placeholderText="mm/dd/yyyy"
							/>
							<DatePicker
								placeholderText="mm/dd/yyyy"
								minDate={form.watch('start_date')}
								icon="calendar"
								showIcon
								name="end_date"
								label="End Date"
							/>
						</Grid>
					</Form>
				</FormProvider>
			</ModalBody>
			<ModalFooter>
				<Button
					format="outline"
					variant="tertiary"
					onClick={handleClose}
					disabled={isLoading}
				>
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
