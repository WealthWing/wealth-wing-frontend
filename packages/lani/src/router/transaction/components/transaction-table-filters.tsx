import { Flex, FormControl, Input } from '@wealth-wing/tayo';
import { useFormContext } from 'react-hook-form';
import { TransactionsFormFields } from 'router/transaction/components/transactions-provider.definitions';

export const TransactionTableFilters = () => {
	const { register } = useFormContext<TransactionsFormFields>();

	return (
		<Flex>
			<FormControl label="Search transactions" hideLabel>
				<Input placeholder="Search transactions..." {...register('filters.search')} />
			</FormControl>
		</Flex>
	);
};
