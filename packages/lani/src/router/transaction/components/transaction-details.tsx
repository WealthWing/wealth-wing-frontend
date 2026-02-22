import { skipToken } from '@reduxjs/toolkit/query';
import { Box, Flex, Heading, SkeletonAreaLoader, Text } from '@wealth-wing/tayo';
import { formatUSD, formatUtcDateTime } from '@wealth-wing/utils';
import { useTransactionByIdQuery } from 'redux/transaction-queries';

type TransactionDetailsProps = {
	transactionId: string | null;
};

const DetailItem = ({ label, value }: { label: string; value: string }) => (
	<Flex direction="column" gap="s4">
		<Text font="sm" color="textSecondary">
			{label}
		</Text>
		<Text font="lg">{value}</Text>
	</Flex>
);

export const TransactionDetails = ({ transactionId }: TransactionDetailsProps) => {
	const { data, isLoading, isFetching, isError } = useTransactionByIdQuery(
		transactionId ? { transactionId } : skipToken
	);

	if (!transactionId) {
		return (
			<Box padding="s16">
				<Text color="textSecondary">Select a transaction to view details.</Text>
			</Box>
		);
	}

	if (isLoading || isFetching) {
		return (
			<Box padding="s16">
				<Flex direction="column" gap="s12">
					<SkeletonAreaLoader width="100%" height="2rem" />
					<SkeletonAreaLoader width="100%" height="2rem" />
					<SkeletonAreaLoader width="100%" height="2rem" />
				</Flex>
			</Box>
		);
	}

	if (isError || !data) {
		return (
			<Box padding="s16">
				<Text color="red90">Unable to load transaction details.</Text>
			</Box>
		);
	}

	const formattedDate = data.date
		? formatUtcDateTime(data.date, { isLocalTime: true, dateFormat: 'month-day-year' })
		: '-';

	return (
		<Box padding="s16">
			<Flex direction="column" gap="s16">
				<Heading tag="h2" font="h5">
					Transaction Details
				</Heading>
				<DetailItem label="Description" value={data.title || '-'} />
				<DetailItem label="Date" value={formattedDate} />
				<DetailItem label="Category" value={data.category || '-'} />
				<DetailItem label="Account" value={data.account_name || '-'} />
				<DetailItem label="Type" value={data.type || '-'} />
				<DetailItem label="Amount" value={formatUSD(data.amount)} />
			</Flex>
		</Box>
	);
};
