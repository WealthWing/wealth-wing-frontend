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
import { useForm } from 'react-hook-form';

type CreateScopeModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export const CreateScopeModal = ({ isOpen, onClose }: CreateScopeModalProps) => {
	/* 	const { jobId = '' } = useParams(); */

	const form = useForm<any>();
	const {
		/* 	formState: { errors }, */
		handleSubmit,
		register
	} = form;

	const onSubmit = () => {
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} variant="floatingsmall" canClose>
			<ModalHeader title="Create Scope" />
			<ModalBody>
				<Form onSubmit={handleSubmit(onSubmit)} id="create-scope-form">
					<FormControl required label="Scope Title" id="scope-title" error="asd">
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
