import { Text } from '@wealth-wing/tayo';
import { table } from 'components/table/table.styles';
import React from 'react';

/**
 * Example usage:
 *
 * <Table width={800}>
 *   <TableHeaderRow isSticky>
 *     <TableHeaderRowCell width={200}>Name</TableHeaderRowCell>
 *     <TableHeaderRowCell width={200}>Age</TableHeaderRowCell>
 *     <TableHeaderRowCell width={400}>Email</TableHeaderRowCell>
 *   </TableHeaderRow>
 *   <TableBody>
 *     <TableRow isSelected onClick={() => alert('Row clicked!')}>
 *       <TableRowCell width={200}>John Doe</TableRowCell>
 *       <TableRowCell width={200}>30</TableRowCell>
 *       <TableRowCell width={400}>john@example.com</TableRowCell>
 *     </TableRow>
 *     <TableRow>
 *       <TableRowCell width={200}>Jane Smith</TableRowCell>
 *       <TableRowCell width={200}>25</TableRowCell>
 *       <TableRowCell width={400}>jane@example.com</TableRowCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 */

export const Table = ({ children, width }: { children: React.ReactNode; width: number }) => (
	<table css={{ minWidth: '100%', width }}>{children}</table>
);

type TableHeaderRowProps = {
	isSticky?: boolean;
	children: React.ReactNode;
};

export const TableHeaderRow = ({ children, isSticky = false }: TableHeaderRowProps) => (
	<thead>
		<tr css={[table.header, isSticky && table.sticky]}>{children}</tr>
	</thead>
);

export const TableHeaderRowCell = ({
	children,
	width
}: {
	children: React.ReactNode;
	width: number;
}) => (
	<th css={table.headerCell} style={{ width }}>
		{children}
	</th>
);

export const TableBody = ({ children }: { children: React.ReactNode }) => <tbody>{children}</tbody>;

export const TableRow = ({
	children,
	isSelected,
	onClick
}: {
	children: React.ReactNode;
	isSelected?: boolean;
	onClick?: () => void;
}) => (
	<tr css={[table.rowLayout(!!onClick), isSelected && table.selectedRow]} onClick={onClick}>
		{children}
	</tr>
);

export const TableRowCell = ({
	children,
	width,
	height
}: {
	children: React.ReactNode;
	width: number;
	height?: number;
}) => (
	<td css={table.cellContent} style={{ width, height }}>
		<Text font="md">{children}</Text>
	</td>
);
