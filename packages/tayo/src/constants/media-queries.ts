export type Media = 'mobile' | 'tabletSmall' | 'tabletLarge' | 'laptop' | 'desktop';

export const mqValues: Record<Media, number> = {
	mobile: 0,
	tabletSmall: 600,
	tabletLarge: 800,
	laptop: 1200,
	desktop: 1920
};

export const mq: Record<Media, string> = {
	mobile: `@media screen and (min-width: ${mqValues.mobile}px), print`,
	tabletSmall: `@media screen and (min-width: ${mqValues.tabletSmall}px), print`,
	tabletLarge: `@media screen and (min-width: ${mqValues.tabletLarge}px), print`,
	laptop: `@media screen and (min-width: ${mqValues.laptop}px), print`,
	desktop: `@media screen and (min-width: ${mqValues.desktop}px), print`
};
