import * as React from 'react';
import { useDeleteSubscriptionMutation } from 'redux/subscription-queries';

export const useDeleteSubscription = () => {
	const [deleteSubscription, { isLoading }] = useDeleteSubscriptionMutation();
	const [error, setError] = React.useState<string | null>(null);

	const onDelete = async (subscriptionId: string) => {
		if (!window.confirm('Are you sure you want to delete this subscription?')) {
			return;
		}

		try {
			setError(null);
			await deleteSubscription({ subscriptionId }).unwrap();
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Failed to delete subscription');
		}
	};

	return {
		onDelete,
		isLoading,
		error
	};
};
