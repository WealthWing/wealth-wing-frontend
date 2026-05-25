import {
	Button,
	Dropdown,
	DropdownPanel,
	Flex,
	FormControl,
	IconButton,
	Input,
	Radio,
	Select,
	Text
} from '@wealth-wing/tayo';
import { useFormContext } from 'react-hook-form';
import { fieldsetContainer } from 'router/transaction/components/transaction-table-filters.style';
import {
	AccountTypeFilter,
	sortByOptions,
	TransactionsFormFields
} from 'router/transaction/components/transactions-provider.definitions';

type FilterProps = {
	onApplyFilters: () => void;
	activeAccountType: AccountTypeFilter;
	onAccountTypeChange: (value: AccountTypeFilter) => void;
};

export const TransactionTableFilters = ({
	onApplyFilters,
	activeAccountType,
	onAccountTypeChange
}: FilterProps) => {
	const { register, reset, getValues } = useFormContext<TransactionsFormFields>();

	const handleResetFilters = () => {
		const values = getValues();
		reset({
			...values,
			filters: {
				search: '',
				type: 'all',
				accountType: 'all',
				itemsPerPage: { label: '20', value: '20' },
				sortBy: { label: 'Date', value: 'date' },
				sortOrder: 'asc'
			}
		});
	};

	return (
		<Flex direction="row" gap="s12" alignItems="center">
			<Flex direction="row" gap="s8" alignItems="center">
				<Button
					type="button"
					variant={activeAccountType === 'all' ? 'primary' : 'secondary'}
					format="text"
					onClick={() => onAccountTypeChange('all')}
				>
					All Accounts
				</Button>
				<Button
					type="button"
					variant={activeAccountType === 'CREDIT_CARD' ? 'primary' : 'secondary'}
					format="text"
					onClick={() => onAccountTypeChange('CREDIT_CARD')}
				>
					Credit Card
				</Button>
				<Button
					type="button"
					variant={activeAccountType === 'CHECKING' ? 'primary' : 'secondary'}
					format="text"
					onClick={() => onAccountTypeChange('CHECKING')}
				>
					Debit
				</Button>
			</Flex>
			<FormControl label="Search transactions" hideLabel>
				<Input placeholder="Search transactions..." {...register('filters.search')} />
			</FormControl>
			<Dropdown placement="bottom-end" distance={8}>
				<IconButton format="outline" variant="tertiary" label="filters" iconName="filter" />
				<DropdownPanel>
					<Flex direction="column" gap="s16">
						<Select<TransactionsFormFields>
							name="filters.sortBy"
							label="Sort By"
							options={sortByOptions}
						/>
						<fieldset css={fieldsetContainer}>
							<legend>
								<Text font="sm" color="textSecondary">
									Sort Order
								</Text>
							</legend>
							<Flex direction="row" alignItems="center" gap="s12">
								<Radio
									label="Ascending"
									{...register('filters.sortOrder')}
									value="asc"
								/>
								<Radio
									label="Descending"
									{...register('filters.sortOrder')}
									value="desc"
								/>
							</Flex>
						</fieldset>

						<fieldset css={fieldsetContainer}>
							<legend>
								<Text font="sm" color="textSecondary">
									Transaction Type
								</Text>
							</legend>
							<Flex direction="row" alignItems="center" gap="s12">
								<Radio
									label="Income"
									{...register('filters.type')}
									value="income"
								/>
								<Radio
									label="Expense"
									{...register('filters.type')}
									value="expense"
								/>
								<Radio label="All" {...register('filters.type')} value="all" />
							</Flex>
						</fieldset>
						<Flex direction="row" gap="s8" justifyContent="flex-end">
							<Button
								type="button"
								variant="secondary"
								format="text"
								onClick={handleResetFilters}
							>
								Reset Filters
							</Button>
							<Button
								type="button"
								variant="primary"
								format="regular"
								onClick={onApplyFilters}
							>
								Apply Filters
							</Button>
						</Flex>
					</Flex>
				</DropdownPanel>
			</Dropdown>
		</Flex>
	);
};
