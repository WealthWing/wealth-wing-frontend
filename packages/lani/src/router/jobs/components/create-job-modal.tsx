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
import { CreateJobRequest } from 'data/client-definitions';
import { useForm } from 'react-hook-form';
import { useCreateJobMutation } from 'redux/job-queries';

type FormValues = CreateJobRequest;

type CreateJobModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const CreateJobModal = ({ isOpen, onClose }: CreateJobModalProps) => {
	const [createJob] = useCreateJobMutation();

	const form = useForm<FormValues>();
	const {
		formState: { errors },
		handleSubmit,
		register
	} = form;

	const onSubmit = (data: FormValues) => {
		createJob({ project_name: data.project_name });
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} variant="floatingsmall" canClose>
			<ModalHeader title="Create Job" />
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
				<Button format="outline" variant="tertiary" onClick={onClose}>
					Close
				</Button>
				<Button format="regular" variant="primary" type="submit" form="create-job-form">
					Create job
				</Button>
			</ModalFooter>
		</Modal>
	);
};
