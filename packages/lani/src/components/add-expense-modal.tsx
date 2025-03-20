import {
	Box,
	Form,
	FormControl,
	Grid,
	Input,
	Modal,
	ModalBody,
	ModalHeader
} from '@wealth-wing/tayo';
import { ExpenseCreateRequest } from 'data/api-definitions';
import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = Pick<
	ExpenseCreateRequest,
	'amount' | 'category_id' | 'title' | 'description' | 'date'
>;

type AddExpenseModalProps = {
	isAddExpenseOpen: boolean;
	handleAddExpenseClose: () => void;
};

export const AddExpenseModal = ({
	handleAddExpenseClose,
	isAddExpenseOpen
}: AddExpenseModalProps) => {
	const form = useForm<FormValues>();
	const {
		formState: { errors },
		register
	} = form;

	return (
		<Modal
			variant="slideleft"
			isOpen={isAddExpenseOpen}
			onClose={handleAddExpenseClose}
			allowOverlayClose
		>
			<ModalHeader title="New Expense" />
			<ModalBody>
				<Box mt="s20">
					<Form>
						<Grid gridTemplateColumns="1fr 1fr" gap="s20">
							<FormControl
								required
								label="Expense Title"
								id="expense-title"
								error={errors.title?.message}
							>
								<Input
									{...register('title', {
										required: {
											value: true,
											message: 'Expense title is required'
										}
									})}
									placeholder="Enter Expense Title"
								/>
							</FormControl>
							<FormControl
								required
								label="Expense Title"
								id="expense-title"
								error={errors.title?.message}
							>
								<Input
									{...register('amount', {
										required: {
											value: true,
											message: 'Expense title is required'
										}
									})}
									placeholder="Enter Expense Title"
								/>
							</FormControl>
						</Grid>
					</Form>
				</Box>
			</ModalBody>
		</Modal>
	);
};
