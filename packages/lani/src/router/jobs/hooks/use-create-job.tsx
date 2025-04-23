import { useDisclosureControl } from '@wealth-wing/tayo';
import { useForm } from 'react-hook-form';
import { useCreateJobMutation } from 'redux/job-queries';
import { JobFormValues } from 'router/jobs/components/job-form-modal';

export function useCreateJob() {
	const [createJob, { isLoading }] = useCreateJobMutation();
	const { isOpen, handleClose, handleOpen } = useDisclosureControl();
	const form = useForm<JobFormValues>({
		defaultValues: { project_name: '', end_date: undefined, start_date: undefined }
	});

	const onSubmit = (data: JobFormValues) => {
		createJob({
			project_name: data.project_name,
			start_date: data.start_date?.toISOString(),
			end_date: data.end_date?.toISOString()
		});
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
