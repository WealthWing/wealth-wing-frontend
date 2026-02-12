import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable
} from '@tanstack/react-table';
import { Dropdown, IconButton, Menu, MenuItem } from '@wealth-wing/tayo';
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
import React from 'react';
import { AddSubscriptionModal } from 'router/account/components/add-subscription-modal';

const columnHelper = createColumnHelper<SubscriptionCandidateResponse>();

type GetColumnsProps = {
	onAddSubscription: (candidate: SubscriptionCandidateResponse) => void;
	onRemoveFromList: (candidate: SubscriptionCandidateResponse) => void;
};

const getColumns = ({ onAddSubscription, onRemoveFromList }: GetColumnsProps) => [
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
		size: 60,
		cell: ({ row }) => (
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
					<MenuItem onClick={() => onAddSubscription(row.original)}>
						Add to Subscription
					</MenuItem>
					<MenuItem onClick={() => onRemoveFromList(row.original)}>
						Remove from the list
					</MenuItem>
				</Menu>
			</Dropdown>
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
	const [selectedCandidate, setSelectedCandidate] =
		React.useState<SubscriptionCandidateResponse | null>(null);
	const [removedCandidateIds, setRemovedCandidateIds] = React.useState<string[]>([]);

	const onRemoveFromList = React.useCallback((candidate: SubscriptionCandidateResponse) => {
		setRemovedCandidateIds((prev) =>
			prev.includes(candidate.uuid) ? prev : [...prev, candidate.uuid]
		);
	}, []);

	const filteredData = React.useMemo(
		() => (data ?? []).filter((candidate) => !removedCandidateIds.includes(candidate.uuid)),
		[data, removedCandidateIds]
	);

	const columns = React.useMemo(
		() =>
			getColumns({
				onAddSubscription: setSelectedCandidate,
				onRemoveFromList
			}),
		[onRemoveFromList]
	);

	const table = useReactTable({
		data: filteredData,
		columns,
		getCoreRowModel: getCoreRowModel()
	});

	if (isLoading) {
		return <TableSkeletonLoader />;
	}

	if (filteredData.length === 0) {
		return <NoData />;
	}

	return (
		<>
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
			<AddSubscriptionModal
				isOpen={Boolean(selectedCandidate)}
				candidate={selectedCandidate}
				onClose={() => setSelectedCandidate(null)}
				onSuccess={onRemoveFromList}
			/>
		</>
	);
};
