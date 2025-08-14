import { Color, Icon, IconName, IconSize } from '@wealth-wing/tayo';

export type Institution = Extract<IconName, 'chase'>;

/**
 * Returns an Icon component for the specified institution.
 *
 * @param institution - The name of the institution (e.g., 'chase').
 * @param color - Optional color for the icon.
 * @param size - Optional size for the icon.
 * @returns The Icon component representing the institution.
 */
export const getInstitutionIcon = (institution: Institution, color?: Color, size?: IconSize) => {
	return <Icon name={institution} size={size} color={color} />;
};
