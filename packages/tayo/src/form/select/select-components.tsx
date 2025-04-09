import React from 'react';
import { components, ControlProps, MenuProps } from 'react-select';

import { Icon, IconName } from '../../icon';
import { mergeRefs } from '../../utils/merge-refs';
import { useSelect } from './select.provider';

type SelectControlProps = ControlProps & {
	icon?: IconName;
};

export const SelectControl = ({ children, icon, ...restProps }: SelectControlProps) => {
	return (
		<components.Control {...restProps}>
			{icon && <Icon name={icon} color="indigo100" />}
			{children}
		</components.Control>
	);
};

export const makeSelectControl = (icon?: IconName) => {
	return (props: ControlProps) => <SelectControl {...props} icon={icon} />;
};

export const SelectMenu = ({ innerRef, ...rest }: MenuProps) => {
	const { currentMenuWidth, setCurrentMenuWidth } = useSelect();
	const ref = React.useRef<HTMLDivElement>(null);

	const mergedRef = mergeRefs<HTMLDivElement | null>(ref, innerRef);

	React.useLayoutEffect(() => {
		if (ref.current) {
			const { width } = ref.current.getBoundingClientRect();
			if (width > currentMenuWidth) {
				setCurrentMenuWidth(width);
			}
		}
	}, [currentMenuWidth, setCurrentMenuWidth]);

	return <components.Menu innerRef={mergedRef} {...rest} />;
};
