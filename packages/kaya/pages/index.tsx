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
import { ProductionFootprint } from '../components/production-footprint';

const page = css({
	background: theme.color.pageBackground,
	color: theme.color.textPrimary,
	minHeight: '100vh'
});

const Home = () => {
	return (
		<main css={page}>
			<Header />
			<Hero />
			<ProductionFootprint />
			<ProblemsSection />
			<ServicesSection />
			<ProcessSection />
			<AboutSection />
			<CtaFooter />
		</main>
	);
};

export default Home;
