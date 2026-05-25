import {
	Button,
	Flex,
	Form,
	Grid,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	OptionType,
	Select,
	Text
} from '@wealth-wing/tayo';
import { formatUSD } from '@wealth-wing/utils';
import { SubscriptionCandidateResponse } from 'data/api-definitions';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
	useCreateSubscriptionMutation,
	useGetSubscriptionsQuery
} from 'redux/subscription-queries';
import { useAddTransactionToSubscriptionMutation } from 'redux/transaction-queries';
import {
	billingFrequencyOptions,
	mapFormToRequest,
	SubscriptionFormValues,
	toFormDefaults
} from 'router/subscription/components/subscription-form.utils';
import { SubscriptionInput } from 'router/subscription/components/subscription-input';

type AddSubscriptionMode = 'existing' | 'new';

type AddSubscriptionFormValues = SubscriptionFormValues & {
	existing_subscription: OptionType | null;
};

type AddSubscriptionModalProps = {
	isOpen: boolean;
	onClose: () => void;
	candidate: SubscriptionCandidateResponse | null;
	onSuccess?: (candidate: SubscriptionCandidateResponse) => void;
};

const getBillingFrequencyOption = (frequency?: string | null) => {
	if (!frequency) return null;
	const normalizedFrequency = frequency.toLowerCase();

	return (
		billingFrequencyOptions.find((option) => option.value === normalizedFrequency) ?? {
			value: normalizedFrequency,
			label: frequency
		}
	);
};

const getFormDefaults = (
	candidate?: SubscriptionCandidateResponse | null
): AddSubscriptionFormValues => {
	const defaults = toFormDefaults();

	if (!candidate) {
		return {
			...defaults,
			existing_subscription: null
		};
	}

	return {
		...defaults,
		name: candidate.title || '',
		amount: (candidate.amount ?? 0) / 100,
		currency: candidate.currency ?? defaults.currency,
		billing_frequency: getBillingFrequencyOption(candidate.frequency),
		category_id: candidate.category_id
			? {
					value: candidate.category_id,
					label: candidate.category ?? candidate.category_id
			  }
			: null,
		existing_subscription: null
	};
};

export const AddSubscriptionModal = ({
	isOpen,
	onClose,
	candidate,
	onSuccess
}: AddSubscriptionModalProps) => {
	const [mode, setMode] = React.useState<AddSubscriptionMode>('existing');
	const { data: subscriptions = [] } = useGetSubscriptionsQuery();
	const [createSubscription, { isLoading: isCreatingSubscription }] =
		useCreateSubscriptionMutation();
	const [addTransactionToSubscription, { isLoading: isAddingTransaction }] =
		useAddTransactionToSubscriptionMutation();
	const form = useForm<AddSubscriptionFormValues>({
		defaultValues: getFormDefaults(),
		shouldUnregister: true
	});
	const { handleSubmit, reset, setValue } = form;
	const isSubmitting = isCreatingSubscription || isAddingTransaction;

	const subscriptionOptions = React.useMemo(
		() =>
			subscriptions.map((subscription) => ({
				value: subscription.uuid,
				label: subscription.name
			})),
		[subscriptions]
	);

	const hasExistingSubscriptions = subscriptionOptions.length > 0;

	React.useEffect(() => {
		if (!isOpen) {
			reset(getFormDefaults());
			setMode('existing');
			return;
		}

		reset(getFormDefaults(candidate));
		setMode('existing');
	}, [candidate, isOpen, reset]);

	const onModalClose = () => {
		reset(getFormDefaults());
		setMode('existing');
		onClose();
	};

	const onSubmit: SubmitHandler<AddSubscriptionFormValues> = async (values) => {
		if (!candidate?.title) {
			return;
		}

		try {
			let subscriptionId = values.existing_subscription?.value;

			if (mode === 'new') {
				const createdSubscription = await createSubscription(
					mapFormToRequest(values)
				).unwrap();
				subscriptionId = createdSubscription.uuid;
			}

			if (!subscriptionId) {
				return;
			}

			await addTransactionToSubscription({
				subscription_id: subscriptionId,
				transaction_name: candidate.title
			}).unwrap();

			onSuccess?.(candidate);
			onModalClose();
		} catch {
			// Keep modal open on error.
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onModalClose} variant="floatinglarge">
			<ModalHeader title="Add to Subscription" />
			<ModalBody>
				<FormProvider {...form}>
					<Form id="add-subscription-modal" onSubmit={handleSubmit(onSubmit)}>
						<Grid gap="s20" gridTemplateColumns="1fr">
							<Flex direction="row" gap="s12">
								<Button
									type="button"
									variant={mode === 'existing' ? 'primary' : 'tertiary'}
									format={mode === 'existing' ? 'regular' : 'outline'}
									onClick={() => {
										setMode('existing');
										setValue('existing_subscription', null);
									}}
								>
									Use Existing
								</Button>
								<Button
									type="button"
									variant={mode === 'new' ? 'primary' : 'tertiary'}
									format={mode === 'new' ? 'regular' : 'outline'}
									onClick={() => setMode('new')}
								>
									Create New
								</Button>
							</Flex>

							{candidate && (
								<Flex direction="row" justifyContent="space-between">
									<Text>Transaction: {candidate.title}</Text>
									<Text>{formatUSD(candidate.amount)}</Text>
								</Flex>
							)}

							{mode === 'existing' ? (
								<Grid gap="s8" gridTemplateColumns="1fr">
									<Select<AddSubscriptionFormValues>
										name="existing_subscription"
										label="Select Subscription"
										options={subscriptionOptions}
										placeholder="Choose a subscription"
										rules={{
											validate: (value) =>
												mode === 'existing'
													? Boolean(value) ||
													  'Please select a subscription'
													: true
										}}
									/>
									{!hasExistingSubscriptions && (
										<Text color="textSecondary">
											No subscriptions available. Choose &quot;Create
											New&quot; to continue.
										</Text>
									)}
								</Grid>
							) : (
								<SubscriptionInput />
							)}
						</Grid>
					</Form>
				</FormProvider>
			</ModalBody>
			<ModalFooter>
				<Button format="outline" variant="tertiary" onClick={onModalClose} type="button">
					Cancel
				</Button>
				<Button
					format="regular"
					variant="primary"
					type="submit"
					form="add-subscription-modal"
					isLoading={isSubmitting}
					disabled={mode === 'existing' && !hasExistingSubscriptions}
				>
					{mode === 'existing' ? 'Add to Subscription' : 'Create and Add'}
				</Button>
			</ModalFooter>
		</Modal>
	);
};
