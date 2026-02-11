import { OptionType } from '@wealth-wing/tayo';
import { convertToCents } from '@wealth-wing/utils';
import { SubscriptionRequest, SubscriptionResponse } from 'data/api-definitions';

export const billingFrequencyOptions: OptionType[] = [
	{ value: 'weekly', label: 'Weekly' },
	{ value: 'monthly', label: 'Monthly' },
	{ value: 'quarterly', label: 'Quarterly' },
	{ value: 'yearly', label: 'Yearly' }
];

export type SubscriptionFormValues = {
	name: string;
	amount: number;
	currency: string | null;
	billing_frequency: OptionType | null;
	category_id: OptionType | null;
	start_date: Date | null;
	end_date: Date | null;
	next_billing_date: Date | null;
	auto_renew: boolean;
	status: OptionType | null;
	payment_method: string | null;
	notes: string | null;
	cancellation_date: Date | null;
	trial_period: boolean;
	trial_end_date: Date | null;
	total_amount_spent: number | null;
	contract_length: string | null;
	contract_end_date: Date | null;
	usage_limits: string | null;
	support_contact: string | null;
	website_url: string | null;
};

const toDate = (value?: string | null) => (value ? new Date(value) : null);

const findBillingOption = (value?: string | null) => {
	if (!value) {
		return null;
	}
	return (
		billingFrequencyOptions.find((option) => option.value === value) ?? {
			value,
			label: value
		}
	);
};

export const toFormDefaults = (initialData?: SubscriptionResponse): SubscriptionFormValues => ({
	name: initialData?.name || '',
	amount: (initialData?.amount ?? 0) / 100,
	currency: initialData?.currency ?? '',
	billing_frequency: findBillingOption(initialData?.billing_frequency),
	category_id: initialData?.category_id
		? { value: initialData.category_id, label: initialData.category_id }
		: null,
	start_date: toDate(initialData?.start_date),
	end_date: toDate(initialData?.end_date),
	next_billing_date: toDate(initialData?.next_billing_date),
	auto_renew: initialData?.auto_renew !== false,
	status: initialData?.status ? { value: initialData.status, label: initialData.status } : null,
	payment_method: initialData?.payment_method ?? '',
	notes: initialData?.notes ?? '',
	cancellation_date: toDate(initialData?.cancellation_date),
	trial_period: initialData?.trial_period === true,
	trial_end_date: toDate(initialData?.trial_end_date),
	total_amount_spent:
		initialData?.total_amount_spent !== undefined && initialData?.total_amount_spent !== null
			? Number(initialData.total_amount_spent)
			: null,
	contract_length: initialData?.contract_length ?? '',
	contract_end_date: toDate(initialData?.contract_end_date),
	usage_limits: initialData?.usage_limits ?? '',
	support_contact: initialData?.support_contact ?? '',
	website_url: initialData?.website_url ?? ''
});

const toIsoString = (value: Date | null) => (value ? value.toISOString() : null);

export const mapFormToRequest = (values: SubscriptionFormValues): SubscriptionRequest => ({
	name: values.name,
	amount: convertToCents(values.amount),
	currency: values.currency || null,
	billing_frequency: values.billing_frequency?.value ?? null,
	category_id: values.category_id?.value ?? null,
	start_date: toIsoString(values.start_date),
	end_date: toIsoString(values.end_date),
	next_billing_date: toIsoString(values.next_billing_date),
	auto_renew: values.auto_renew,
	status: values.status?.value ?? null,
	payment_method: values.payment_method || null,
	notes: values.notes || null,
	cancellation_date: toIsoString(values.cancellation_date),
	trial_period: values.trial_period,
	trial_end_date: toIsoString(values.trial_end_date),
	total_amount_spent: values.total_amount_spent ?? null,
	contract_length: values.contract_length || null,
	contract_end_date: toIsoString(values.contract_end_date),
	usage_limits: values.usage_limits || null,
	support_contact: values.support_contact || null,
	website_url: values.website_url || null
});
