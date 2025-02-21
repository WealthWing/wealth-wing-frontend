import { Icon, useDisclosureControl } from '@wealth-wing/tayo';
import { addScope } from 'router/scope/add-scope.styles';
import { CreateScopeModal } from 'router/scope/create-scope-modal';

export const AddScope = () => {
	const { isOpen, handleClose, handleOpen } = useDisclosureControl();

	return (
		<>
			<button css={addScope.root} onClick={handleOpen}>
				<Icon name="plus" size="s24" />
				Add Job Scope
			</button>
			<CreateScopeModal isOpen={isOpen} onClose={handleClose} />
		</>
	);
};
