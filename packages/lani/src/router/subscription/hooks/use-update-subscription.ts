import { useDisclosureControl } from '@wealth-wing/tayo';
import { SubscriptionRequest, SubscriptionResponse } from 'data/api-definitions';
import * as React from 'react';
import {
	useLazyGetSubscriptionQuery,
	useUpdateSubscriptionMutation
} from 'redux/subscription-queries';

export const useUpdateSubscription = () => {
	const [updateSubscription, { isLoading }] = useUpdateSubscriptionMutation();
	const [getSubscription, { isLoading: isLoadingSubscription }] = useLazyGetSubscriptionQuery();
	const { isOpen, handleOpen, handleClose } = useDisclosureControl();
	const [error, setError] = React.useState<string | null>(null);
	const [selectedId, setSelectedId] = React.useState<string | null>(null);
	const [selectedSubscription, setSelectedSubscription] =
		React.useState<SubscriptionResponse | null>(null);

	const onUpdateModalOpen = (id: string) => {
		setSelectedId(id);
		setSelectedSubscription(null);
		handleOpen();
		// Fetch the subscription details
		getSubscription({ subscriptionId: id })
			.unwrap()
			.then((data) => {
				setSelectedSubscription(data);
			})
			.catch((err) => {
				const errorMessage =
					err instanceof Error ? err.message : 'Failed to load subscription';
				setError(errorMessage);
			});
	};

	const onUpdateSubmit = async (data: SubscriptionRequest) => {
		if (!selectedId) return;
		try {
			setError(null);
			await updateSubscription({ subscriptionId: selectedId, params: data }).unwrap();
			handleClose();
			setSelectedId(null);
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : 'Failed to update subscription';
			setError(errorMessage);
			throw err; // Rethrow so modal knows submission failed
		}
	};

	return {
		isOpen,
		onUpdateModalOpen,
		onUpdateModalClose: handleClose,
		onUpdateSubmit,
		selectedId,
		selectedSubscription,
		isLoading: isLoading || isLoadingSubscription,
		error
	};
};
