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
	TextArea,
	theme
} from '@wealth-wing/tayo';
import { convertToCents } from '@wealth-wing/utils';
import { ExpenseCreateRequest } from 'data/api-definitions';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useCagetoriesQuery } from 'redux/category-queries';
import { useCreateExpenseMutation } from 'redux/expense-queries';

/* TODO: add date field */

type FormValues = Pick<ExpenseCreateRequest, 'title' | 'description' | 'date'> & {
	amount: string;
	category: OptionType;
};

type AddExpenseModalProps = {
	isAddExpenseOpen: boolean;
	handleAddExpenseClose: () => void;
	jobScopeId: string;
};

export const AddExpenseModal = ({
	handleAddExpenseClose,
	isAddExpenseOpen,
	jobScopeId
}: AddExpenseModalProps) => {
	const { data: categories } = useCagetoriesQuery();
	const [createExpense] = useCreateExpenseMutation();
	const form = useForm<FormValues>();
	const {
		formState: { errors },
		register
	} = form;

	const handleSubmit = async (data: FormValues) => {
		try {
			await createExpense({
				amount: convertToCents(Number(data.amount)),
				category_id: data.category.value,
				date: new Date().toISOString(),
				title: data.title,
				description: data.description,
				scope_id: jobScopeId
			}).unwrap();
			handleAddExpenseClose();
		} catch (error) {
			/* TODO: handle error */
			console.error(error);
		}
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
						<Form
							css={{ gap: theme.space.s10 }}
							id="new-expense-form"
							onSubmit={form.handleSubmit(handleSubmit)}
						>
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
							<Button variant="primary" format="regular" type="submit" isFullWidth>
								Submit
							</Button>
						</Form>
					</FormProvider>
				</Box>
			</ModalBody>
		</Modal>
	);
};
