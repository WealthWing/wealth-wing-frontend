import {
	Button,
	Form,
	FormControl,
	Input,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader
} from '@wealth-wing/tayo';
import { CreateScopeRequest } from 'data/client-definitions';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useCreateScopeMutation } from 'redux/scope-queries';

type CreateScopeFormValues = Pick<CreateScopeRequest, 'scope_name' | 'budget'>;

type CreateScopeModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const CreateScopeModal = ({ isOpen, onClose }: CreateScopeModalProps) => {
	const [createScope] = useCreateScopeMutation();
	const { jobId = '' } = useParams();

	const form = useForm<CreateScopeFormValues>();
	const {
		formState: { errors },
		handleSubmit,
		register
	} = form;

	const onSubmit = (data: CreateScopeFormValues) => {
		createScope({ scope_name: data.scope_name, budget: data.budget, project_id: jobId });
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} variant="floatingsmall" canClose>
			<ModalHeader title="Create Scope" />
			<ModalBody>
				<Form onSubmit={handleSubmit(onSubmit)} id="create-scope-form">
					<FormControl
						required
						label="Scope Title"
						id="scope-title"
						error={errors.scope_name?.message}
					>
						<Input
							{...register('scope_name', {
								required: { value: true, message: 'Scope title is required' }
							})}
							placeholder="Enter scope title"
						/>
					</FormControl>
				</Form>
			</ModalBody>
			<ModalFooter>
				<Button format="outline" variant="tertiary" onClick={onClose}>
					Close
				</Button>
				<Button format="regular" variant="primary" type="submit" form="create-scope-form">
					Create Scope
				</Button>
			</ModalFooter>
		</Modal>
	);
};
