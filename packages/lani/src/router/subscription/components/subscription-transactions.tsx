import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table';
import { Box, SkeletonLoaderContainer, SkeletonTextLoader, Text } from '@wealth-wing/tayo';
import { formatUSD, formatUtcDateTime } from '@wealth-wing/utils';
import {
	Table,
	TableBody,
	TableHeaderRow,
	TableHeaderRowCell,
	TableRow,
	TableRowCell
} from 'components/table/table';
import { NoData } from 'components/table/table-get-more';
import { TransactionResponse } from 'data/api-definitions';
import { useGetSubscriptionTransactionsQuery } from 'redux/subscription-queries';

const columnHelper = createColumnHelper<TransactionResponse>();

const columns = [
	columnHelper.accessor('title', {
		header: 'Merchant',
		size: 220,
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('amount', {
		header: 'Amount',
		size: 140,
		cell: ({ getValue }) => {
			const value = getValue();
			return <Text color={value < 0 ? 'red90' : 'green90'}>{formatUSD(value)}</Text>;
		}
	}),
	columnHelper.accessor('date', {
		header: 'Date',
		size: 160,
		cell: ({ getValue }) => {
			const value = getValue();
			if (value) {
				return formatUtcDateTime(value, { dateFormat: 'month-day-year' });
			}
			return '-';
		}
	})
];

type SubscriptionTransactionsProps = {
	selectedId?: string;
};

export const SubscriptionTransactions = ({ selectedId }: SubscriptionTransactionsProps) => {
	const { data, isLoading } = useGetSubscriptionTransactionsQuery(
		{ subscriptionId: selectedId! },
		{ skip: !selectedId }
	);

	const table = useReactTable({
		data: data?.transactions ?? [],
		columns,
		getCoreRowModel: getCoreRowModel()
	});

	if (isLoading) {
		return (
			<SkeletonLoaderContainer
				size={5}
				gap="s8"
				renderComponent={(key) => <SkeletonTextLoader key={key} variant="h2" />}
			/>
		);
	}

	if (!data || data?.transactions.length === 0) {
		return (
			<Box>
				<NoData />
			</Box>
		);
	}

	return (
		<Box overflowX="auto" maxHeight="50vh">
			<Table width={table.getTotalSize()}>
				<TableHeaderRow isSticky>
					{table.getFlatHeaders().map((header) => (
						<TableHeaderRowCell key={header.id} width={header.getSize()}>
							{flexRender(header.column.columnDef.header, header.getContext())}
						</TableHeaderRowCell>
					))}
				</TableHeaderRow>
				<TableBody>
					{table.getRowModel().rows.map((row) => (
						<TableRow key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<TableRowCell key={cell.id} width={cell.column.getSize()}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableRowCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Box>
	);
};
