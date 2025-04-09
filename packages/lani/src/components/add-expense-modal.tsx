import {
	Box,
	Button,
	Form,
	FormControl,
	Grid,
	Input,
	Modal,
	ModalBody,
	ModalHeader,
	OptionType,
	Select,
	TextArea
} from '@wealth-wing/tayo';
import { ExpenseCreateRequest } from 'data/api-definitions';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useCagetoriesQuery } from 'redux/category-queries';

type FormValues = Pick<ExpenseCreateRequest, 'title' | 'description' | 'date'> & {
	amount: string;
	category: OptionType;
};

type AddExpenseModalProps = {
	isAddExpenseOpen: boolean;
	handleAddExpenseClose: () => void;
};

export const AddExpenseModal = ({
	handleAddExpenseClose,
	isAddExpenseOpen
}: AddExpenseModalProps) => {
	const { data: categories } = useCagetoriesQuery();
	const form = useForm<FormValues>();
	const {
		formState: { errors },
		register
	} = form;

	const handleSubmit = (data: FormValues) => {
		console.log('Form submitted:', data);
	};

	const selectCategories: OptionType[] = React.useMemo(() => {
		if (!categories) return [];
		return categories /* remove income from the list */
			.filter((c) => c.uuid !== 'e3ae02a5-e8ab-4c8d-9742-f21ba63284e8')
			.map((category) => ({ label: category.title, value: category.uuid }));
	}, [categories]);

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
					<FormProvider {...form}>
						<Form id="new-expense-form" onSubmit={form.handleSubmit(handleSubmit)}>
							<Grid gridTemplateColumns="1fr" gap="s20">
								<FormControl
									required
									label="Spent Amount"
									id="expense-amount"
									error={errors.amount?.message}
									iconLeft="dollar-sign"
								>
									<Input
										{...register('amount', {
											required: {
												value: true,
												message: 'Spent amount is required'
											},
											validate: (value) =>
												/^\d+$/.test(value.trim()) ||
												'Amount must be a valid number (digits only)'
										})}
										placeholder="0.00"
									/>
								</FormControl>
							</Grid>
							<Grid gridTemplateColumns="1fr 1fr" gap="s20">
								<FormControl
									required
									label="Expense Name"
									id="expense-title"
									error={errors.title?.message}
								>
									<Input
										{...register('title', {
											required: {
												value: true,
												message: 'Expense name is required'
											}
										})}
										placeholder="Enter expense name"
									/>
								</FormControl>
								<Select<FormValues>
									name="category"
									label="Category"
									required
									onChange={undefined}
									options={selectCategories}
								/>
							</Grid>
							<Grid gridTemplateColumns="1fr" gap="none">
								<FormControl
									required
									label="Note"
									id="expense-note"
									error={errors.description?.message}
								>
									<TextArea
										lines={4}
										{...register('description')}
										placeholder="Where did you spend this money?"
									/>
								</FormControl>
							</Grid>
							<Button variant="primary" format="regular" type="submit">
								Submit
							</Button>
						</Form>
					</FormProvider>
				</Box>
			</ModalBody>
		</Modal>
	);
};
