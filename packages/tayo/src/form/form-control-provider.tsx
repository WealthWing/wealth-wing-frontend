import { createProvider } from '../providers';

export type FormControlProviderProps = {
	isDisabled?: boolean;
	hasError?: boolean;
	id?: string;
	required?: boolean;
};

export const [FormControlProvider, useFormControl] =
	createProvider<FormControlProviderProps>('FormControl');
