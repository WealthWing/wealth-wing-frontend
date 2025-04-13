import { css } from '@emotion/react';
import { Dropdown, Elevated, Flex, Heading, IconButton, Menu, MenuItem } from '@wealth-wing/tayo';
import { jobCard } from 'components/job-card.styles';
import React from 'react';
import { NavLink } from 'react-router-dom';

type FolderCardProps = {
	children?: React.ReactNode;
	title: string;
	to: string;
	onEditOpen?: () => void;
	onDeleteOpen?: () => void;
};

export const JobCard = ({ children, title, to, onEditOpen, onDeleteOpen }: FolderCardProps) => {
	return (
		<li css={css({ listStyle: 'none', zIndex: 0 })}>
			<NavLink to={to} aria-label={title}>
				{({ isActive }) => (
					<div css={jobCard.root(isActive)}>
						<Flex direction="row" justifyContent="space-between" gap="s4">
							<Heading tag="h4" font="h6" css={css({ alignSelf: 'center' })}>
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
