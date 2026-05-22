import { css } from '@emotion/react';
import { Box, Heading, theme } from '@wealth-wing/tayo';

const page = css({
	background: theme.color.pageBackground,
	color: theme.color.textPrimary,
	minHeight: '100vh'
});

const shell = css({
	margin: '0 auto',
	maxWidth: '72rem',
	padding: '7rem 1.5rem'
});

const eyebrow = css({
	color: theme.color.primary100,
	font: theme.font.button,
	letterSpacing: '0',
	marginBottom: theme.space.s16,
	textTransform: 'uppercase'
});

const title = css({
	font: theme.font.h1,
	letterSpacing: '0',
	margin: 0,
	maxWidth: '52rem'
});

const intro = css({
	color: theme.color.textSecondary,
	font: theme.font.lg,
	marginTop: theme.space.s24,
	maxWidth: '38rem'
});

const card = css({
	background: theme.color.cardBackground100,
	border: theme.border.default,
	borderRadius: theme.borderRadius.radiusXLarge,
	boxShadow: theme.shadow.default100,
	marginTop: theme.space.s64,
	maxWidth: '32rem',
	padding: theme.space.s32
});

const Home = () => {
	return (
		<main css={page}>
			<Box _css={shell}>
				<Box tag="p" _css={eyebrow}>
					Kaya
				</Box>
				<Heading tag="h1" css={title}>
					Midnight Fire is ready for the personal site.
				</Heading>
				<Box tag="p" _css={intro}>
					The Kaya package is initialized as a Next.js app and is already wrapped in
					Tayo with the new theme.
				</Box>
				<Box tag="section" _css={card}>
					<Heading tag="h2" font="h4">
						Theme checkpoint
					</Heading>
					<Box tag="p" color="textSecondary">
						Orange is reserved for action and emphasis, graphite owns the surfaces,
						and silver handles the quiet details.
					</Box>
				</Box>
			</Box>
		</main>
	);
};

export default Home;
