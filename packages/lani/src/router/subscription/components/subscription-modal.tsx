import { Button, Form, Modal, ModalBody, ModalFooter, ModalHeader } from '@wealth-wing/tayo';
import { SubscriptionRequest, SubscriptionResponse } from 'data/api-definitions';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
	mapFormToRequest,
	SubscriptionFormValues,
	toFormDefaults
} from 'router/subscription/components/subscription-form.utils';
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
	const form = useForm<SubscriptionFormValues>({
		defaultValues: toFormDefaults(initialData)
	});

	const { handleSubmit, reset } = form;

	React.useEffect(() => {
		if (!isOpen) {
			reset(toFormDefaults());
		}
	}, [isOpen, reset]);

	React.useEffect(() => {
		if (isOpen && initialData) {
			reset(toFormDefaults(initialData));
		}
	}, [initialData, isOpen, reset]);

	const onModalSubmit: SubmitHandler<SubscriptionFormValues> = async (data) => {
		try {
			await onSubmit(mapFormToRequest(data));
			// Only close and reset on successful submission
			reset();
			onClose();
		} catch {
			// Keep modal open on error; error handling is done in the hook
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} variant="floatinglarge">
			<ModalHeader title={initialData ? 'Edit Subscription' : 'Add Subscription'} />
			<ModalBody>
				<FormProvider {...form}>
					<Form onSubmit={handleSubmit(onModalSubmit)} id="subscription-modal">
						<SubscriptionInput />
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
