import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table';
import {
	Box,
	Dropdown,
	Flex,
	IconButton,
	Menu,
	MenuItem,
	Select,
	Text,
	useDisclosureControl
} from '@wealth-wing/tayo';
import { formatUSD, formatUtcDateTime } from '@wealth-wing/utils';
import { Section } from 'components/section';
import {
	Table,
	TableBody,
	TableHeaderRow,
	TableHeaderRowCell,
	TableRow,
	TableRowCell
} from 'components/table/table';
import { TableGetMore } from 'components/table/table-get-more';
import { TransactionResponse } from 'data/api-definitions';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useTransactionsInfiniteQuery } from 'redux/transaction-queries';
import { AddSubscriptionModal } from 'router/account/components/add-subscription-modal';
import { TransactionTableFilters } from 'router/transaction/components/transaction-table-filters';
import { useTransactions } from 'router/transaction/components/transactions-provider';
import {
	AccountTypeFilter,
	TransactionsFormFields
} from 'router/transaction/components/transactions-provider.definitions';
import { useDebounce } from 'use-debounce';

const debounceTime = 1000;
type GetColumnsProps = {
	onAddSubscription: (id: string) => void;
};
const columnHelper = createColumnHelper<TransactionResponse>();

const getColumns = ({ onAddSubscription }: GetColumnsProps) => [
	columnHelper.accessor('date', {
		header: 'Date',
		cell: ({ getValue }) => {
			const value = getValue();
			if (value) {
				return formatUtcDateTime(value, {
					isLocalTime: true,
					dateFormat: 'month-day-year'
				});
			}
			return '-';
		}
	}),
	columnHelper.accessor('title', {
		header: 'Description',
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('category', {
		header: 'Category',
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('account_name', {
		header: 'Account',
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('amount', {
		header: 'Amount',
		cell: ({ getValue, row }) => {
			const value = getValue();
			return (
				<Text color={row.original.type === 'expense' ? 'red90' : 'green90'}>
					{formatUSD(value)}
				</Text>
			);
		}
	}),
	columnHelper.display({
		id: 'actions',
		header: 'Actions',
		size: 60,
		cell: ({ row }) =>
			row.original.type === 'expense' && !row.original.subscription_id ? (
				// eslint-disable-next-line prettier/prettier, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
				<div onClick={(e) => e.stopPropagation()}>
					<Dropdown>
						<IconButton
							format="text"
							variant="tertiary"
							iconName="more-vertical"
							aria-haspopup="true"
							label={`Subscription candidate actions for ${row.original.title}`}
							iconColor="textPrimary"
						/>
						<Menu>
							<MenuItem onClick={() => onAddSubscription(row.original.uuid)}>
								Add to Subscription
							</MenuItem>
						</Menu>
					</Dropdown>
				</div>
			) : null
	})
];

type Filters = TransactionsFormFields['filters'];

export const Transactions = () => {
	const { isOpen, handleOpen: onOpen, handleClose: onClose } = useDisclosureControl();
	const [selectedCandidate, setSelectedCandidate] = React.useState<TransactionResponse | null>(
		null
	);
	const { onRightPanelOpen } = useTransactions();
	const { getValues, watch, setValue } = useFormContext<TransactionsFormFields>();
	const selectedAccountType =
		(watch('filters.accountType') as AccountTypeFilter | undefined) ?? 'all';
	const [search] = useDebounce(watch('filters.search'), debounceTime);
	const [filters, setFilters] = React.useState<Filters>({
		search: '',
		type: 'all',
		accountType: 'all',
		itemsPerPage: { label: '20', value: '20' },
		sortBy: { label: 'Date', value: 'date' },
		sortOrder: 'asc'
	});

	const accountType =
		filters.accountType === 'CREDIT_CARD' || filters.accountType === 'CHECKING'
			? filters.accountType
			: undefined;

	const { data, isFetchingNextPage, isError, error, status, fetchNextPage, hasNextPage } =
		useTransactionsInfiniteQuery({
			page_size: parseInt(filters.itemsPerPage.value, 10),
			from_date: watch('date.from')?.toISOString(),
			to_date: watch('date.to')?.toISOString(),
			search,
			sort_by: filters.sortBy?.value,
			sort_order: filters.sortOrder,
			account_type: accountType,
			filter_by_inputs:
				filters.type && filters.type !== 'all'
					? [{ field_name: 'type', values: [filters.type] }]
					: undefined
		});

	const tableData = React.useMemo(() => {
		return data?.pages?.flatMap((page) => page.transactions) ?? [];
	}, [data]);

	const latestTransaction = React.useMemo(() => {
		return data?.pages?.[0];
	}, [data]);

	const handleOpen = React.useCallback(
		(id: string) => {
			const candidate = tableData?.find((item) => item.uuid === id) || null;
			setSelectedCandidate(candidate);
			onOpen();
		},
		[tableData, onOpen]
	);

	const columns = React.useMemo(
		() =>
			getColumns({
				onAddSubscription: handleOpen
			}),
		[handleOpen]
	);

	const table = useReactTable({
		data: tableData,
		columns,
		columnResizeMode: 'onChange',
		getCoreRowModel: getCoreRowModel()
	});

	const handleNextPage = async () => {
		if (hasNextPage && !isFetchingNextPage) {
			await fetchNextPage();
		}
	};

	const handleSubmitFilters = () => {
		const values = getValues();
		const newFilters = {
			search: values.filters.search,
			type: values.filters.type,
			accountType: values.filters.accountType,
			itemsPerPage: values.filters.itemsPerPage,
			sortBy: values.filters.sortBy,
			sortOrder: values.filters.sortOrder
		};
		setFilters(newFilters);
	};

	const handleAccountTypeChange = React.useCallback(
		(value: AccountTypeFilter) => {
			setValue('filters.accountType', value);
			setFilters((prevFilters) => ({
				...prevFilters,
				accountType: value
			}));
		},
		[setValue]
	);

	const handleItemsPerPageChange = React.useCallback(
		(value: { label: string; value: string }) => {
			setValue('filters.itemsPerPage', value);
			setFilters((prevFilters) => ({
				...prevFilters,
				itemsPerPage: value
			}));
		},
		[setValue]
	);

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<>
			<Section
				title="Transactions"
				sectionTools={
					<TransactionTableFilters
						onApplyFilters={handleSubmitFilters}
						activeAccountType={selectedAccountType}
						onAccountTypeChange={handleAccountTypeChange}
					/>
				}
			>
				<Box maxHeight="400px" overflowX="auto">
					<TableGetMore
						hasMore={hasNextPage}
						count={{
							received: tableData.length,
							total: latestTransaction?.total_count ?? 0
						}}
						status={status}
						onGetMore={handleNextPage}
					>
						<Table width={table.getTotalSize()}>
							<TableHeaderRow isSticky>
								{table.getFlatHeaders().map((header) => (
									<TableHeaderRowCell key={header.id} width={header.getSize()}>
										{flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
									</TableHeaderRowCell>
								))}
							</TableHeaderRow>
							<TableBody>
								{table.getRowModel().rows.map((row) => (
									<TableRow
										key={row.id}
										onClick={() => onRightPanelOpen(row.original.uuid)}
									>
										{row.getVisibleCells().map((cell) => (
											<TableRowCell
												key={cell.id}
												width={cell.column.getSize()}
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableRowCell>
										))}
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableGetMore>
				</Box>
				<Box mt="s12">
					<Flex direction="row" justifyContent="space-between" alignItems="center">
						<Text font="sm" color="textSecondary">
							Rows per page
						</Text>
						<Box minWidth="12rem">
							<Select<TransactionsFormFields>
								name="filters.itemsPerPage"
								label="Rows per page"
								hideLabel
								onChange={(value) =>
									handleItemsPerPageChange({
										label: value.label,
										value: value.value
									})
								}
								options={[
									{ label: '20', value: '20' },
									{ label: '50', value: '50' },
									{ label: '100', value: '100' }
								]}
							/>
						</Box>
					</Flex>
				</Box>
			</Section>
			<AddSubscriptionModal isOpen={isOpen} candidate={selectedCandidate} onClose={onClose} />
		</>
	);
};
