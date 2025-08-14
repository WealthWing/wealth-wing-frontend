import { Button, Flex, ModalBody, ModalFooter, Select } from '@wealth-wing/tayo';
import { useGetAcccountOptionsQuery } from 'redux/account';
import { ImportFormValues, useImport } from 'router/import/components/import-management';

export const ImportAccountSelect = () => {
	const { onChangeStep } = useImport();
	const { data, isLoading, isFetching } = useGetAcccountOptionsQuery();
	const isFetchingOrLoading = isLoading || isFetching;

	return (
		<>
			<ModalBody>
				<Flex direction="row" alignItems="center" css={{ height: '100%' }}>
					<Select<ImportFormValues>
						name="account"
						options={data ?? []}
						label="Choose account"
						isLoading={isFetchingOrLoading}
					/>
				</Flex>
			</ModalBody>
			<ModalFooter>
				<Button variant="tertiary" format="text">
					Close
				</Button>
				<Button
					variant="primary"
					format="light"
					onClick={() => onChangeStep('file-upload')}
				>
					Select File
				</Button>
			</ModalFooter>
		</>
	);
};
