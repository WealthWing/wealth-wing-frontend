import React from 'react';

import { Icon } from '../../icon';
import { Text } from '../../text';
import { useFormControl } from '../form-control-provider';
import { errorMessage } from './error-message.styles';

type ErrorMessageProps = {
	message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
	const { id } = useFormControl();

	return (
		<div id={`${id}-error`} css={errorMessage}>
			<Icon name="warning" color="red80" size="s12" />
			<Text color="red80" font="sm">
				{message}
			</Text>
		</div>
	);
};
