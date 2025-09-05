import { useDisclosureControl } from '@wealth-wing/tayo';
import { AccountType } from 'data/api-definitions';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLazyGetAcccountQuery, useUpdateAccountMutation } from 'redux/account';
import { useAppSelector } from 'redux/hooks';
import { AccountFormValues } from 'router/account/components/account-modal';
import { getAccountOption } from 'router/account/components/account-modal.definitions';

export function useUpdateAccount() {
	const [accountId, setAccountId] = React.useState<string | null>(null);
	const { canCreateOrUpdate } = useAppSelector((state) => state.auth);
	const [updateAccount, { reset }] = useUpdateAccountMutation();
	const [getAccountData, { isLoading: isLoadingAccount }] = useLazyGetAcccountQuery();
	const { isOpen, handleClose, handleOpen } = useDisclosureControl({ onClose: () => reset() });
	const form = useForm<AccountFormValues>();

	const onSubmit = async (formData: AccountFormValues) => {
		if (!accountId) return;
		if (!canCreateOrUpdate) {
			return;
		}
		try {
			await updateAccount({
				accountId,
				params: {
					account_name: formData.account_name,
					account_type: formData.account_type.value as AccountType,
					institution: formData.institution,
					last_four: formData.last_four
				}
			});
		} catch (error) {
			/* TODO: handle the errors */
			console.error(error);
		} finally {
			/* TODO: add toast? */
			handleClose();
		}
	};

	const handleModalOpen = (id: string) => {
		handleOpen();
		setAccountId(id);
		getAccountData({ accountId: id })
			.unwrap()
			.then((resp) =>
				form.reset({
					account_name: resp.account_name,
					account_type: getAccountOption(resp.account_type),
					institution: resp.institution,
					last_four: resp.last_four
				})
			);
	};

	return {
		isOpen,
		onAccountModalClose: handleClose,
		onAccountModalOpen: handleModalOpen,
		isLoading: isLoadingAccount,
		onSubmit,
		form
	};
}
