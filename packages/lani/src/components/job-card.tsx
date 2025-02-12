import { Dropdown, Elevated, Flex, Heading, IconButton, Menu, MenuItem } from '@wealth-wing/tayo';
import { jobCard } from 'components/job-card.styles';
import React from 'react';
import { Link } from 'react-router-dom';

type FolderCardProps = {
	children: React.ReactNode;
	title: string;
	to: string;
};

export const JobCard = ({ children, title, to }: FolderCardProps) => {
	return (
		<div css={jobCard.root} aria-label={title}>
			<Link css={jobCard.link} to={to} />
			<Flex direction="row" justifyContent="space-between" gap="s4">
				<Heading tag="h4" font="h6">
					{title}
				</Heading>
				<Elevated>
					<Dropdown>
						<IconButton
							format="text"
							variant="tertiary"
							iconName="more-vertical"
							label="select menu"
							iconColor="textPrimary"
						/>
						<Menu>
							<MenuItem>Edit</MenuItem>
							<MenuItem>Delete</MenuItem>
						</Menu>
					</Dropdown>
				</Elevated>
			</Flex>
			{children}
		</div>
	);
};
