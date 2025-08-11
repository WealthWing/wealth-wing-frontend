import {
	Button,
	Form,
	FormControl,
	Grid,
	Input,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Select
} from '@wealth-wing/tayo';
import { AccountRequest } from 'data/api-definitions';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import { AccoundOption, accountOptions } from 'router/account/components/account-modal.definitions';

export type AccountFormValues = Omit<AccountRequest, 'account_type'> & {
	account_type: AccoundOption;
};

type AccountModalProps = {
	isOpen: boolean;
	onAccountModalClose: () => void;
	title: string;
	buttonLabel: string;
	onSubmit: (formData: AccountFormValues) => void;
	form: UseFormReturn<AccountFormValues>;
	isLoading: boolean;
};

export const AccountFormModal = ({
	isOpen,
	onAccountModalClose,
	title,
	buttonLabel,
	onSubmit,
	form
}: AccountModalProps) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = form;

	return (
		<Modal isOpen={isOpen} onClose={onAccountModalClose} variant="floatingsmall">
			<ModalHeader title={title} />
			<ModalBody>
				<FormProvider {...form}>
					<Form onSubmit={handleSubmit(onSubmit)} id="account-modal">
						<Grid gap="s20" gridTemplateColumns="1fr 1fr">
							<FormControl
								required
								label="Account Name"
								id="account-name"
								error={errors?.account_name?.message}
							>
								<Input
									{...register('account_name', {
										required: {
											value: true,
											message: 'Account name is required'
										}
									})}
									placeholder="e.g., Chase Checking, Business Savings"
								/>
							</FormControl>
							<Select<AccountFormValues>
								name="account_type"
								label="Account Type"
								options={accountOptions}
								placeholder="Select Account Type"
								rules={{
									required: { value: true, message: 'Account Type is required' }
								}}
							/>
						</Grid>
						<Grid gap="s20" gridTemplateColumns="2fr 1fr">
							<FormControl
								required
								label="Provider"
								id="institution"
								error={errors?.institution?.message}
							>
								<Input
									{...register('institution', {
										required: {
											value: true,
											message: 'Provider is required'
										}
									})}
									placeholder="e.g., Chase, PayPal, Coinbase"
								/>
							</FormControl>
							<FormControl
								required
								label="Last Four Digits"
								id="last-four"
								error={errors?.last_four?.message}
							>
								<Input
									{...register('last_four', {
										required: {
											value: true,
											message: 'Last four digits are required'
										},
										pattern: {
											value: /^\d{4}$/,
											message: 'Please enter exactly 4 digits'
										}
									})}
									maxLength={4}
									placeholder="1234"
								/>
							</FormControl>
						</Grid>
					</Form>
				</FormProvider>
			</ModalBody>
			<ModalFooter>
				<Button format="outline" variant="tertiary" onClick={onAccountModalClose}>
					Close
				</Button>
				<Button format="regular" variant="primary" type="submit" form="account-modal">
					{buttonLabel}
				</Button>
			</ModalFooter>
		</Modal>
	);
};
