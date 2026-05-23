import { useMediaQuery } from 'react-responsive';
import { mqValues } from '../constants/media-queries';

export const useMediaQueries = () => ({
	isDesktop: useMediaQuery({ minWidth: mqValues.desktop }),
	isLaptop: useMediaQuery({ minWidth: mqValues.laptop, maxWidth: mqValues.desktop - 1 }),
	isTabletLarge: useMediaQuery({ minWidth: mqValues.tabletLarge, maxWidth: mqValues.laptop - 1 }),
	isTabletSmall: useMediaQuery({
		minWidth: mqValues.tabletSmall,
		maxWidth: mqValues.tabletLarge - 1
	}),
	isMobile: useMediaQuery({ minWidth: mqValues.mobile, maxWidth: mqValues.tabletSmall - 1 })
});
