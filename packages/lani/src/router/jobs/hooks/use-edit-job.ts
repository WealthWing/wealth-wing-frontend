import { useDisclosureControl } from '@wealth-wing/tayo';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGetJobQuery, useUpdateJobMutation } from 'redux/job-queries';
import { JobFormValues } from 'router/jobs/components/job-form-modal';

export function useEditJob() {
	const { jobId } = useParams();
	const [updateJob, { isLoading }] = useUpdateJobMutation();
	const { isOpen, handleClose, handleOpen } = useDisclosureControl();
	const form = useForm<JobFormValues>({ defaultValues: { project_name: '' } });
	const { data: jobData, isLoading: isJobLoading } = useGetJobQuery(
		{ projectId: jobId || '' },
		{ skip: !isOpen || !jobId }
	);

	React.useEffect(() => {
		if (jobData) {
			form.setValue('project_name', jobData.project_name);
		}
	}, [form, jobData]);

	const onSubmit = (data: JobFormValues) => {
		updateJob({
			projectId: jobId || '',
			params: {
				project_name: data.project_name,
				start_date: data.start_date?.toISOString(),
				end_date: data.end_date?.toISOString()
			}
		});
		handleClose();
		/* TODO: confirm success */
	};

	const isLoadingOrJobLoading = isLoading || isJobLoading;

	return {
		isOpen,
		onOpen: handleOpen,
		onClose: handleClose,
		isLoading: isLoadingOrJobLoading,
		onSubmit,
		form
	};
}
