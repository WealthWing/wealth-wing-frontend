import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { ProcessSection } from '../components/process';
import { ProblemsSection } from '../components/problems';
import { ServicesSection } from '../components/services';
import { TrustStrip } from '../components/trust-strip';
import { AboutSection } from '../components/about';
import { CtaFooter } from '../components/cta-footer';
import { TrustPillarsSection } from '../components/trust-pillars';

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
				ctaLabel="Start the conversation"
				ctaHref="#contact"
			/>
			<Hero showEyebrow={false} />
			<TrustStrip />
			<ServicesSection />
			<ProblemsSection />
			<ProcessSection />
			<TrustPillarsSection />
			<AboutSection />
			<CtaFooter />
		</main>
	);
};

export default Home;
