import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table';
import { Flex, IconButton } from '@wealth-wing/tayo';
import { capitalizedFirstLetter } from '@wealth-wing/utils';
import {
	Table,
	TableBody,
	TableHeaderRow,
	TableHeaderRowCell,
	TableRow,
	TableRowCell
} from 'components/table/table';
import { NoData } from 'components/table/table-get-more';
import { TableSkeletonLoader } from 'components/table/table-skeleton-loader';
import { SubscriptionCandidateResponse } from 'data/api-definitions';

const columnHelper = createColumnHelper<SubscriptionCandidateResponse>();

const columns = [
	columnHelper.accessor('title', {
		header: 'Title',
		size: 200,
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('category', {
		header: 'Category',
		size: 140,
		cell: ({ getValue }) => capitalizedFirstLetter(getValue() ?? '') || '-'
	}),
	columnHelper.accessor('frequency', {
		header: 'Frequency',
		size: 140,
		cell: ({ getValue }) => capitalizedFirstLetter(getValue() ?? '') || '-'
	}),
	columnHelper.display({
		id: 'actions',
		header: 'Actions',
		size: 30,
		cell: ({ row }) => (
			<Flex direction="row" gap="s8" alignItems="center">
				<IconButton
					variant="tertiary"
					format="text"
					size="small"
					iconName="x"
					label="Dismiss candidate"
					onClick={() => {
						// eslint-disable-next-line no-console
						console.log('Dismiss candidate:', row.original);
					}}
				/>
			</Flex>
		)
	})
];

type SubscriptionCandidatesTableProps = {
	data?: SubscriptionCandidateResponse[];
	isLoading?: boolean;
};

export const SubscriptionCandidatesTable = ({
	data,
	isLoading
}: SubscriptionCandidatesTableProps) => {
	const table = useReactTable({
		data: data ?? [],
		columns,
		getCoreRowModel: getCoreRowModel()
	});

	if (isLoading) {
		return <TableSkeletonLoader />;
	}

	if (!data || data.length === 0) {
		return <NoData />;
	}

	return (
		<Table width={table.getTotalSize()}>
			<TableHeaderRow>
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
	);
};
