import { css } from '@emotion/react';
import { QueryStatus } from '@reduxjs/toolkit/query';
import {
	Box,
	Button,
	CenterContent,
	Flex,
	Icon,
	OverlayLoader,
	ScreenReaderOnly,
	Text,
	theme
} from '@wealth-wing/tayo';
import { TableSkeletonLoader } from 'components/table/table-skeleton-loader';
import React from 'react';

export const NoData = () => (
	<CenterContent>
		<Flex alignItems="center">
			<ScreenReaderOnly>
				<div aria-live="polite" role="status">
					No Results Found
				</div>
			</ScreenReaderOnly>
			<Icon name="search" size="s40" />
			<Text font="lg">No Results Found</Text>
		</Flex>
	</CenterContent>
);

const getMoreStyles = css`
	display: flex;
	flex-direction: column;
	gap: ${theme.space.s10};
	position: relative;
`;

type GetMoreCount = {
	received: number;
	total: number;
};

type TableGetMoreProps = {
	children: React.ReactNode;
	count?: GetMoreCount;
	hasMore: boolean;
	status: QueryStatus;
	onGetMore: () => Promise<void>;
};

export const TableGetMore = ({
	children,
	count,
	hasMore,
	status,
	onGetMore
}: TableGetMoreProps) => {
	const isLoading = status === QueryStatus.pending;

	const showInitialLoading = count?.received === 0 && isLoading;
	const showOverlayLoading = isLoading && !showInitialLoading;
	const hasNoData = !isLoading && (count?.received === 0 || !count);
	const hasData = !!(count?.received && count?.received > 0);
	const showControls = !!(hasMore || (count?.received && count.total));

	return (
		<div css={getMoreStyles}>
			{hasNoData && <NoData />}
			{showOverlayLoading && <OverlayLoader />}
			{hasData && children}
			{showInitialLoading && <TableSkeletonLoader />}
			{showControls && (
				<Box pb="s10" pt="s10">
					<Flex direction="row" alignItems="center">
						{hasMore && (
							<Button
								variant="primary"
								format="regular"
								onClick={onGetMore}
								disabled={isLoading}
							>
								Get More
							</Button>
						)}
						{count && (
							<>
								<ScreenReaderOnly>
									<div aria-live="polite" role="status">
										{`Showing ${count.received} of ${count.total}`}
									</div>
								</ScreenReaderOnly>
								<Text font="sm" tag="span">
									{`Showing ${count.received} of ${count.total}`}
								</Text>
							</>
						)}
					</Flex>
				</Box>
			)}
		</div>
	);
};
