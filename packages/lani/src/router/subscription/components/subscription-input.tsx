import { DatePicker, FormControl, Grid, Input } from '@wealth-wing/tayo';
import { SubscriptionRequest } from 'data/api-definitions';
import { Control, Controller } from 'react-hook-form';

type SubscriptionInputProps = {
	control: Control<SubscriptionRequest>;
};

const billingFrequencies = [
	{ value: 'daily', label: 'Daily' },
	{ value: 'weekly', label: 'Weekly' },
	{ value: 'monthly', label: 'Monthly' },
	{ value: 'quarterly', label: 'Quarterly' },
	{ value: 'yearly', label: 'Yearly' }
];

export const SubscriptionInput = ({ control }: SubscriptionInputProps) => {
	return (
		<Grid gap="s20" gridTemplateColumns="1fr">
			<Controller
				name="name"
				control={control}
				rules={{ required: 'Subscription name is required' }}
				render={({ field, fieldState: { error } }) => (
					<FormControl
						label="Subscription Name"
						id="name"
						error={error?.message}
						required
					>
						<Input {...field} placeholder="e.g., Netflix" />
					</FormControl>
				)}
			/>

			<Grid gap="s20" gridTemplateColumns="1fr 1fr">
				<Controller
					name="amount"
					control={control}
					rules={{ required: 'Amount is required', min: 0 }}
					render={({ field, fieldState: { error } }) => (
						<FormControl label="Amount" id="amount" error={error?.message} required>
							<Input
								{...field}
								type="number"
								placeholder="0.00"
								step="0.01"
								onChange={(e) => field.onChange(parseFloat(e.target.value))}
							/>
						</FormControl>
					)}
				/>

				<Controller
					name="billing_frequency"
					control={control}
					render={({ field, fieldState: { error } }) => (
						<FormControl
							label="Billing Frequency"
							id="frequency"
							error={error?.message}
						>
							<select
								{...field}
								style={{
									width: '100%',
									padding: '8px 12px',
									borderRadius: '4px',
									border: '1px solid #ddd',
									fontFamily: 'inherit'
								}}
								value={field.value || ''}
							>
								<option value="">Select frequency</option>
								{billingFrequencies.map((freq) => (
									<option key={freq.value} value={freq.value}>
										{freq.label}
									</option>
								))}
							</select>
						</FormControl>
					)}
				/>
			</Grid>

			<Grid gap="s20" gridTemplateColumns="1fr 1fr">
				<Controller
					name="start_date"
					control={control}
					render={({ field, fieldState: { error } }) => (
						<FormControl label="Start Date" id="start_date" error={error?.message}>
							<DatePicker
								selected={field.value ? new Date(field.value) : null}
								onChange={(date) => field.onChange(date?.toISOString() || '')}
								name="start_date"
								label="Start Date"
							/>
						</FormControl>
					)}
				/>

				<Controller
					name="end_date"
					control={control}
					render={({ field, fieldState: { error } }) => (
						<FormControl label="End Date" id="end_date" error={error?.message}>
							<DatePicker
								selected={field.value ? new Date(field.value) : null}
								onChange={(date) => field.onChange(date?.toISOString() || null)}
								name="end_date"
								label="End Date"
							/>
						</FormControl>
					)}
				/>
			</Grid>
		</Grid>
	);
};
