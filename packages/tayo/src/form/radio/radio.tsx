import * as React from 'react';

import { RadioProps } from './radio.definitions';
import { radio } from './radio.styles';

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
	({ label, ...inputProps }, ref) => {
		return (
			<label htmlFor={inputProps.name} css={radio.root}>
				<input ref={ref} type="radio" {...inputProps} />
				<div className="wrapper">
					<span className="radio" />
					<div className="label">{label}</div>
				</div>
			</label>
		);
	}
);
