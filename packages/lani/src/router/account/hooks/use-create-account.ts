import { useDisclosureControl } from '@wealth-wing/tayo';
import { AccountType } from 'data/api-definitions';
import { useForm } from 'react-hook-form';
import { useAddAccountMutation } from 'redux/account';
import { AccountFormValues } from 'router/account/components/account-modal';

export function useCreateAccount() {
	const [addAccount, { isLoading, reset }] = useAddAccountMutation();
	const { isOpen, handleClose, handleOpen } = useDisclosureControl({ onClose: () => reset() });
	const form = useForm<AccountFormValues>();

	const onSubmit = async (formData: AccountFormValues) => {
		try {
			await addAccount({
				account_name: formData.account_name,
				account_type: formData.account_type.value as AccountType,
				institution: formData.institution,
				last_four: formData.last_four
			});
		} catch (error) {
			/* TODO: handle the errors */
			console.error(error);
		} finally {
			/* TODO: add toast? */
			handleClose();
		}
	};

	return {
		isOpen,
		onAccountModalClose: handleClose,
		onAccountModalOpen: handleOpen,
		isLoading,
		onSubmit,
		form
	};
}
