import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';
import { Header } from '../components/header';
import { Hero } from '../components/hero';

const page = css({
	background: theme.color.pageBackground,
	color: theme.color.textPrimary,
	minHeight: '100vh'
});

const Home = () => {
	return (
		<main css={page}>
			<Header
				links={[
					{ label: 'Work', href: '#work' },
					{ label: 'Process', href: '#process' },
					{ label: 'Contact', href: '#contact' }
				]}
				ctaLabel="Book a call"
				ctaHref="#"
			/>
			<Hero showEyebrow={false} />
		</main>
	);
};

export default Home;
