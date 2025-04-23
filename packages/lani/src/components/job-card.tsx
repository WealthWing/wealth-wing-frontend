import { css } from '@emotion/react';
import {
	Dropdown,
	Elevated,
	Flex,
	Heading,
	IconButton,
	Menu,
	MenuItem,
	Text
} from '@wealth-wing/tayo';
import { formatUSD, formatUtcDateTime } from '@wealth-wing/utils';
import { jobCard } from 'components/job-card.styles';
import React from 'react';
import { NavLink } from 'react-router-dom';

type FolderCardProps = {
	children?: React.ReactNode;
	title: string;
	to: string;
	jobStartDate?: string | null;
	jobEndDate?: string | null;
	totalSpent: number | null;
	onEditOpen?: () => void;
	onDeleteOpen?: () => void;
};

export const JobCard = ({
	children,
	title,
	to,
	jobEndDate,
	jobStartDate,
	onEditOpen,
	onDeleteOpen,
	totalSpent
}: FolderCardProps) => {
	return (
		<li css={css({ listStyle: 'none', zIndex: 0 })}>
			<NavLink to={to} aria-label={title}>
				{({ isActive }) => (
					<div css={jobCard.root(isActive)}>
						<Flex direction="row" justifyContent="space-between" gap="s4">
							<Flex direction="column" gap="s4">
								<div>
									<Heading tag="h3" font="h6" css={css({ alignSelf: 'center' })}>
										{title}
									</Heading>
								</div>
								<Flex direction="row" justifyContent="space-between">
									<Text font="sm">
										<Text tag="span" font="sm" color="textSecondary">
											Start Date:{' '}
										</Text>
										{jobStartDate
											? formatUtcDateTime(jobStartDate, {
													dateFormat: 'month-day-year',
													isLocalTime: true
											  })
											: '-'}
									</Text>
									<Text font="sm">
										<Text tag="span" font="sm" color="textSecondary">
											End Date:{' '}
										</Text>
										{jobEndDate
											? formatUtcDateTime(jobEndDate, {
													dateFormat: 'month-day-year',
													isLocalTime: true
											  })
											: '-'}
									</Text>
								</Flex>
								<div>
									<Heading tag="h4" font="h6" css={css({ alignSelf: 'center' })}>
										Total Expenses: {formatUSD(totalSpent ?? 0)}
									</Heading>
								</div>
							</Flex>
							<Elevated>
								<Dropdown>
									<IconButton
										format="text"
										variant="tertiary"
										iconName="more-vertical"
										label="select menu"
										iconColor="textPrimary"
										onClick={(e) => e.preventDefault()}
									/>
									<Menu>
										<MenuItem onClick={onEditOpen}>Edit</MenuItem>
										<MenuItem onClick={onDeleteOpen}>Delete</MenuItem>
									</Menu>
								</Dropdown>
							</Elevated>
						</Flex>
						{children}
					</div>
				)}
			</NavLink>
		</li>
	);
};
