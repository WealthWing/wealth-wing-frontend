import { DatePicker, Flex } from '@wealth-wing/tayo';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ReportsFormFields } from 'router/reports/reports-definitions';
import { reportsPage } from 'router/reports/reports-page.styles';

type FilterButtonProps = {
	label: string;
	active?: boolean;
	onClick?: () => void;
};

const FilterButton = ({ label, active, onClick }: FilterButtonProps) => (
	<button
		css={[reportsPage.filterButton, active && reportsPage.filterButtonActive]}
		onClick={onClick}
		aria-pressed={active}
	>
		{label}
	</button>
);

const filterOptions = [
	{ label: '3M', value: 'lastThreeMonths' },
	{ label: '6M', value: 'lastSixMonths' },
	{ label: '12M', value: 'lastTwelveMonths' },
	{ label: 'YTD', value: 'thisYear' },
	{ label: 'Last Year', value: 'lastYear' }
] as const;

type ReportsFiltersProps = {
	onFilterSelect: (value: string, label: string) => void;
};

export const ReportsFilters = ({ onFilterSelect }: ReportsFiltersProps) => {
	const { watch, setValue } = useFormContext<ReportsFormFields>();
	const activeFilter = watch('selectedFilter');

	const handleDateChange = () => {
		setValue('selectedFilter', null);
	};

	return (
		<Flex direction="row" alignItems="center" gap="s8">
			{filterOptions.map(({ label, value }) => (
				<FilterButton
					key={label}
					label={label}
					active={activeFilter === label}
					onClick={() => onFilterSelect(value, label)}
				/>
			))}
			<div css={reportsPage.separator} />
			<Flex direction="row" gap="s8" alignItems="center">
				<div css={{ width: '150px' }}>
					<DatePicker
						name="date.from"
						label="From"
						placeholderText="Start Date"
						onChange={handleDateChange}
					/>
				</div>
				<div css={{ width: '150px' }}>
					<DatePicker
						name="date.to"
						label="To"
						placeholderText="End Date"
						onChange={handleDateChange}
					/>
				</div>
			</Flex>
		</Flex>
	);
};
