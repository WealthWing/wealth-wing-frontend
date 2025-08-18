import { flexRender, useReactTable } from '@tanstack/react-table';
import { createColumnHelper, getCoreRowModel } from '@tanstack/table-core';
import { Badge, BadgeVariant, Button } from '@wealth-wing/tayo';
import { formatUtcDateTime } from '@wealth-wing/utils';
import { getInstitutionIcon, Institution } from 'components/icons/institutions';
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
import { ImportFileListItem, ImportJobStatus } from 'data/api-definitions';
import React from 'react';
import { useGetImportsQuery } from 'redux/import-queries';

export const statusMap: Record<ImportJobStatus, BadgeVariant> = {
	COMPLETED: 'success',
	FAILED: 'danger',
	PENDING: 'tertiary',
	PROCESSING: 'primary'
};

export const statusLabelMap: Record<ImportJobStatus, string> = {
	COMPLETED: 'Completed',
	FAILED: 'Failed',
	PENDING: 'Pending',
	PROCESSING: 'Processing'
};

type StatusCellProps = {
	status: ImportJobStatus;
};

const StatusCell = ({ status }: StatusCellProps) => {
	return <Badge badgeVariant={statusMap[status]}>{statusLabelMap[status]}</Badge>;
};

type AccountCellProps = {
	children: React.ReactNode;
	institution: Institution;
};
const AccountCell = ({ children, institution }: AccountCellProps) => (
	<div css={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }}>
		{getInstitutionIcon(institution)} {children}
	</div>
);

const columnHelper = createColumnHelper<ImportFileListItem>();

const columns = [
	columnHelper.accessor('file_name', {
		cell: ({ getValue }) => getValue(),
		header: 'File Name'
	}),
	columnHelper.accessor('account_name', {
		cell: ({ getValue, row }) => (
			<AccountCell institution={row.original.institution.toLowerCase() as Institution}>
				{getValue()}
			</AccountCell>
		),
		header: 'Account'
	}),
	columnHelper.accessor('status', {
		cell: ({ getValue }) => <StatusCell status={getValue()} />,
		header: 'Status'
	}),
	columnHelper.accessor('uploaded_at', {
		cell: ({ getValue }) => formatUtcDateTime(getValue(), { dateFormat: 'month-day-year' }),
		header: 'Imported Date'
	})
];

// TODO: empty table state

export const AccountImports = () => {
	const { data, isLoading, isFetching } = useGetImportsQuery({
		page: 1,
		page_size: 5,
		sort_by: 'uploaded_at',
		sort_order: 'desc'
	});

	const table = useReactTable({
		data: data ?? [],
		columns,
		columnResizeMode: 'onChange',
		getCoreRowModel: getCoreRowModel()
	});
	const isLoadingOrFetching = isLoading || isFetching;

	if (isLoadingOrFetching) {
		return (
			<Section title="Recent Imports">
				<TableSkeletonLoader />
			</Section>
		);
	}

	return (
		<Section
			title="Recent Imports"
			button={
				<Button variant="tertiary" format="text" size="small">
					View All Imports
				</Button>
			}
		>
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
		</Section>
	);
};
