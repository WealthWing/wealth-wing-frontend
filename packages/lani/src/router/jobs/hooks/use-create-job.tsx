import { useDisclosureControl } from '@wealth-wing/tayo';
import { useForm } from 'react-hook-form';
import { useCreateJobMutation } from 'redux/job-queries';
import { JobFormValues } from 'router/jobs/components/job-form-modal';

export function useCreateJob() {
	const [createJob, { isLoading }] = useCreateJobMutation();
	const { isOpen, handleClose, handleOpen } = useDisclosureControl();
	const form = useForm<JobFormValues>({ defaultValues: { project_name: '' } });

	const onSubmit = (data: JobFormValues) => {
		createJob({ project_name: data.project_name });
		handleClose();
		/* TODO: confirm success */
	};

	return {
		isOpen,
		onOpen: handleOpen,
		onClose: handleClose,
		onSubmit,
		isLoading,
		form
	};
}
