/* eslint-disable no-nested-ternary */
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table';
import { Box, Text } from '@wealth-wing/tayo';
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
import { useAsdInfiniteQuery } from 'redux/transaction-queries';
import { useTransactions } from 'router/transaction/components/transactions-provider';

const columnHelper = createColumnHelper<TransactionResponse>();
const columns = [
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
	})
];

export const Transactions = () => {
	const { onRightPanelOpen } = useTransactions();

	const { data, isFetchingNextPage, isError, error, status, fetchNextPage, hasNextPage } =
		useAsdInfiniteQuery();

	const tableData = React.useMemo(() => {
		return data?.pages?.flatMap((page) => page.transactions) ?? [];
	}, [data]);

	const latestTransaction = React.useMemo(() => {
		return data?.pages?.[0];
	}, [data]);

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

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<Section title="Transactions">
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
								<TableRow key={row.id} onClick={() => onRightPanelOpen(row.id)}>
									{row.getVisibleCells().map((cell) => (
										<TableRowCell key={cell.id} width={cell.column.getSize()}>
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
		</Section>
	);
};
