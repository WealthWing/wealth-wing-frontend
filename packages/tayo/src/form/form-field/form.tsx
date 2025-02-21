import * as React from 'react';

import { inlineForm, vertical } from './form.styles';

export type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
	children: React.ReactNode;
	isInline?: boolean;
};

export const Form = ({ children, isInline, ...props }: FormProps) => {
	return (
		<form css={isInline ? inlineForm : vertical} {...props}>
			{children}
		</form>
	);
};
