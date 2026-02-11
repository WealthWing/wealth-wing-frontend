import { DatePicker, FormControl, Grid, Input, Radio, Select, TextArea } from '@wealth-wing/tayo';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { useGetCategoriesQuery } from 'redux/category-queries';
import {
	billingFrequencyOptions,
	SubscriptionFormValues
} from 'router/subscription/components/subscription-form.utils';

export type StatusValue = 'active' | 'inactive' | 'paused' | 'cancelled';

type StatusOption = {
	value: StatusValue;
	label: string;
};

export const statusOptions: StatusOption[] = [
	{ value: 'active', label: 'Active' },
	{ value: 'inactive', label: 'Inactive' },
	{ value: 'paused', label: 'Paused' },
	{ value: 'cancelled', label: 'Cancelled' }
];

export const SubscriptionInput = () => {
	const {
		register,
		setValue,
		formState: { errors },
		watch
	} = useFormContext<SubscriptionFormValues>();
	const { data: categories = [] } = useGetCategoriesQuery();

	const categoryOptions = React.useMemo(
		() =>
			categories.map((category) => ({
				value: category.uuid,
				label: category.title
			})),
		[categories]
	);

	const selectedCategory = watch('category_id');
	const selectedBillingFrequency = watch('billing_frequency');

	React.useEffect(() => {
		if (selectedCategory && categoryOptions.length > 0) {
			const match = categoryOptions.find((option) => option.value === selectedCategory.value);
			if (match && match.label !== selectedCategory.label) {
				setValue('category_id', match);
			}
		}
	}, [categoryOptions, selectedCategory, setValue]);

	React.useEffect(() => {
		if (selectedBillingFrequency && billingFrequencyOptions.length > 0) {
			const match = billingFrequencyOptions.find(
				(option) => option.value === selectedBillingFrequency.value
			);
			if (match && match.label !== selectedBillingFrequency.label) {
				setValue('billing_frequency', match);
			}
		}
	}, [selectedBillingFrequency, setValue]);

	return (
		<Grid gap="s20" gridTemplateColumns="1fr">
			<Grid gap="s20" gridTemplateColumns="1fr 1fr 1fr">
				<FormControl
					label="Subscription Name"
					id="name"
					error={errors?.name?.message}
					required
				>
					<Input
						{...register('name', { required: 'Subscription name is required' })}
						placeholder="e.g., Netflix"
					/>
				</FormControl>

				<FormControl label="Amount" id="amount" error={errors?.amount?.message} required>
					<Input
						{...register('amount', {
							required: 'Amount is required',
							valueAsNumber: true,
							min: { value: 0, message: 'Amount must be 0 or greater' }
						})}
						type="number"
						placeholder="0.00"
						step="0.01"
					/>
				</FormControl>

				<FormControl
					label="Payment Method"
					id="payment_method"
					error={errors?.payment_method?.message}
				>
					<Input {...register('payment_method')} placeholder="e.g., Visa, PayPal" />
				</FormControl>
			</Grid>

			<Grid gap="s20" gridTemplateColumns="1fr 1fr 1fr">
				<Select<SubscriptionFormValues>
					name="category_id"
					label="Category"
					options={categoryOptions}
					placeholder="Select category"
				/>

				<Select<SubscriptionFormValues>
					name="billing_frequency"
					label="Billing Frequency"
					options={billingFrequencyOptions}
					placeholder="Select frequency"
				/>

				<Select<SubscriptionFormValues>
					name="status"
					label="Status"
					options={statusOptions}
					placeholder="Select status"
					required
					rules={{ required: 'Status is required' }}
				/>
			</Grid>

			<Grid gap="s20" gridTemplateColumns="1fr 1fr">
				<FormControl
					label="Contract Length"
					id="contract_length"
					error={errors?.contract_length?.message}
				>
					<Input {...register('contract_length')} placeholder="e.g., 12 months" />
				</FormControl>
			</Grid>

			<Grid gap="s20" gridTemplateColumns="1fr 1fr 1fr 1fr 1fr">
				<FormControl label="Auto Renew" id="auto_renew">
					<Grid gap="s12" gridTemplateColumns="1fr 1fr">
						<Radio
							label="Yes"
							value="true"
							checked={watch('auto_renew') === true}
							onChange={() => setValue('auto_renew', true)}
							name="auto_renew"
						/>
						<Radio
							label="No"
							value="false"
							checked={watch('auto_renew') === false}
							onChange={() => setValue('auto_renew', false)}
							name="auto_renew"
						/>
					</Grid>
				</FormControl>

				<FormControl label="Trial Period" id="trial_period">
					<Grid gap="s12" gridTemplateColumns="1fr 1fr">
						<Radio
							label="Yes"
							value="true"
							checked={watch('trial_period') === true}
							onChange={() => setValue('trial_period', true)}
							name="trial_period"
						/>
						<Radio
							label="No"
							value="false"
							checked={watch('trial_period') === false}
							onChange={() => setValue('trial_period', false)}
							name="trial_period"
						/>
					</Grid>
				</FormControl>
				<DatePicker name="start_date" label="Start Date" />
				<DatePicker name="end_date" label="End Date" />
				<DatePicker name="trial_end_date" label="Trial End Date" />
			</Grid>
			<Grid gap="s20" gridTemplateColumns="1fr 1fr ">
				<DatePicker name="contract_end_date" label="Contract End Date" />
				<DatePicker name="cancellation_date" label="Cancellation Date" />
			</Grid>
			<Grid gap="s20" gridTemplateColumns="1fr 1fr">
				<FormControl
					label="Website URL"
					id="website_url"
					error={errors?.website_url?.message}
				>
					<Input
						{...register('website_url')}
						type="url"
						placeholder="https://example.com"
					/>
				</FormControl>
				<FormControl
					label="Support Contact"
					id="support_contact"
					error={errors?.support_contact?.message}
				>
					<Input {...register('support_contact')} placeholder="support@company.com" />
				</FormControl>
			</Grid>
			<FormControl label="Notes" id="notes" error={errors?.notes?.message}>
				<TextArea {...register('notes')} lines={4} placeholder="Add any notes..." />
			</FormControl>
		</Grid>
	);
};
