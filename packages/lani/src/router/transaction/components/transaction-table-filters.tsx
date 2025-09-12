import { Flex, FormControl, IconButton, Input } from '@wealth-wing/tayo';
import { useFormContext } from 'react-hook-form';
import { TransactionsFormFields } from 'router/transaction/components/transactions-provider.definitions';

export const TransactionTableFilters = () => {
	const { register } = useFormContext<TransactionsFormFields>();

	return (
		<Flex direction="row" gap="s12" alignItems="center">
			<FormControl label="Search transactions" hideLabel>
				<Input placeholder="Search transactions..." {...register('filters.search')} />
			</FormControl>
			<IconButton format="outline" variant="tertiary" label="filters" iconName="filter" />
		</Flex>
	);
};
