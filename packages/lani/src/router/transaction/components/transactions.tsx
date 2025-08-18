import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table';
import { Box } from '@wealth-wing/tayo';
import { Section } from 'components/section';
import {
	Table,
	TableBody,
	TableHeaderRow,
	TableHeaderRowCell,
	TableRow,
	TableRowCell
} from 'components/table/table';
import { TableSkeletonLoader } from 'components/table/table-skeleton-loader';
import { useTransactions } from 'router/transaction/components/transactions-provider';

type Transaction = {
	date: string;
	description: string;
	category: string;
	account: string;
	amount: number;
};

const data: Transaction[] = [
	{
		date: '2025-08-01',
		description: 'Salary',
		category: 'Income',
		account: 'Checking',
		amount: 3500.0
	},
	{
		date: '2025-08-03',
		description: 'Groceries',
		category: 'Food',
		account: 'Credit Card',
		amount: -120.45
	},
	{
		date: '2025-08-05',
		description: 'Electricity Bill',
		category: 'Utilities',
		account: 'Checking',
		amount: -60.0
	},
	{
		date: '2025-08-07',
		description: 'Coffee Shop',
		category: 'Food',
		account: 'Credit Card',
		amount: -8.5
	},
	{
		date: '2025-08-10',
		description: 'Freelance',
		category: 'Income',
		account: 'Savings',
		amount: 500.0
	},
	{
		date: '2025-08-05',
		description: 'Electricity Bill',
		category: 'Utilities',
		account: 'Checking',
		amount: -60.0
	},
	{
		date: '2025-08-07',
		description: 'Coffee Shop',
		category: 'Food',
		account: 'Credit Card',
		amount: -8.5
	},
	{
		date: '2025-08-10',
		description: 'Freelance',
		category: 'Income',
		account: 'Savings',
		amount: 500.0
	},
	{
		date: '2025-08-05',
		description: 'Electricity Bill',
		category: 'Utilities',
		account: 'Checking',
		amount: -60.0
	},
	{
		date: '2025-08-07',
		description: 'Coffee Shop',
		category: 'Food',
		account: 'Credit Card',
		amount: -8.5
	},
	{
		date: '2025-08-10',
		description: 'Freelance',
		category: 'Income',
		account: 'Savings',
		amount: 500.0
	},
	{
		date: '2025-08-01',
		description: 'Salary',
		category: 'Income',
		account: 'Checking',
		amount: 3500.0
	},
	{
		date: '2025-08-03',
		description: 'Groceries',
		category: 'Food',
		account: 'Credit Card Credit Card Credit Card Credit Card',
		amount: -120.45
	},
	{
		date: '2025-08-05',
		description: 'Electricity Bill',
		category: 'Utilities',
		account: 'Checking',
		amount: -60.0
	},
	{
		date: '2025-08-07',
		description: 'Coffee Shop',
		category: 'Food',
		account: 'Credit Card',
		amount: -8.5
	},
	{
		date: '2025-08-10',
		description: 'Freelance',
		category: 'Income',
		account: 'Savings',
		amount: 500.0
	}
];

const columnHelper = createColumnHelper<Transaction>();
const columns = [
	columnHelper.accessor('date', {
		header: 'Date',
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('description', {
		header: 'Description',
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('category', {
		header: 'Category',
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('account', {
		header: 'Account',
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('amount', {
		header: 'Amount',
		cell: (info) => {
			const value = info.getValue();
			return typeof value === 'number'
				? value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
				: value;
		}
	})
];

export const Transactions = () => {
	const { onRightPanelOpen } = useTransactions();
	const table = useReactTable({
		data,
		columns,
		columnResizeMode: 'onChange',
		getCoreRowModel: getCoreRowModel()
	});

	return (
		<Section title="Transactions">
			<Box maxHeight="400px" overflowX="auto">
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
							<TableRow key={row.id} onClick={() => onRightPanelOpen(row.id)}>
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
		</Section>
	);
};
