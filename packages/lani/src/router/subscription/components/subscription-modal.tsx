import { Button, Form, Modal, ModalBody, ModalFooter, ModalHeader } from '@wealth-wing/tayo';
import { SubscriptionRequest, SubscriptionResponse } from 'data/api-definitions';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { SubscriptionInput } from 'router/subscription/components/subscription-input';

type SubscriptionModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (data: SubscriptionRequest) => Promise<void>;
	initialData?: SubscriptionResponse;
	isLoading?: boolean;
};

export const SubscriptionModal = ({
	isOpen,
	onClose,
	onSubmit,
	initialData,
	isLoading = false
}: SubscriptionModalProps) => {
	const form = useForm<SubscriptionRequest>({
		defaultValues: {
			name: initialData?.name || '',
			amount: initialData?.amount || 0,
			billing_frequency: initialData?.billing_frequency || '',
			category_id: initialData?.category_id || null,
			start_date: initialData?.start_date || '',
			end_date: initialData?.end_date || null,
			auto_renew: initialData?.auto_renew !== false
		}
	});

	const { control, handleSubmit, reset } = form;

	React.useEffect(() => {
		if (!isOpen) {
			reset();
		}
	}, [isOpen, reset]);

	const onModalSubmit: SubmitHandler<SubscriptionRequest> = async (data) => {
		try {
			await onSubmit(data);
			// Only close and reset on successful submission
			reset();
			onClose();
		} catch {
			// Keep modal open on error; error handling is done in the hook
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} variant="floatingsmall">
			<ModalHeader title={initialData ? 'Edit Subscription' : 'Add Subscription'} />
			<ModalBody>
				<FormProvider {...form}>
					<Form onSubmit={handleSubmit(onModalSubmit)} id="subscription-modal">
						<SubscriptionInput control={control} />
					</Form>
				</FormProvider>
			</ModalBody>
			<ModalFooter>
				<Button format="outline" variant="tertiary" onClick={onClose} type="button">
					Cancel
				</Button>
				<Button
					format="regular"
					variant="primary"
					type="submit"
					form="subscription-modal"
					isLoading={isLoading}
				>
					{initialData ? 'Update' : 'Create'}
				</Button>
			</ModalFooter>
		</Modal>
	);
};
