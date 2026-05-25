import { useDisclosureControl } from '@wealth-wing/tayo';
import { SubscriptionRequest } from 'data/api-definitions';
import * as React from 'react';
import { useAppSelector } from 'redux/hooks';
import { useCreateSubscriptionMutation } from 'redux/subscription-queries';

export const useCreateSubscription = () => {
	const [createSubscription, { isLoading }] = useCreateSubscriptionMutation();
	const { isOpen, handleOpen, handleClose } = useDisclosureControl();
	const [error, setError] = React.useState<string | null>(null);
	const { canCreateOrUpdate } = useAppSelector((state) => state.auth);

	const onCreateSubmit = async (data: SubscriptionRequest) => {
		if (!canCreateOrUpdate) {
			return;
		}
		try {
			setError(null);
			await createSubscription(data).unwrap();
			handleClose();
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : 'Failed to create subscription';
			setError(errorMessage);
			throw err; // Rethrow so modal knows submission failed
		}
	};
	const handleModalOpen = () => {
		if (canCreateOrUpdate) {
			handleOpen();
		}
	};

	return {
		isOpen,
		onCreateModalOpen: handleModalOpen,
		onCreateModalClose: handleClose,
		onCreateSubmit,
		isLoading,
		error
	};
};
