import Head from 'next/head';
import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { ProcessSection } from '../components/process';
import { ProblemsSection } from '../components/problems';
import { ServicesSection } from '../components/capabilities';
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
		<>
			<Head>
				<title>Ed Shaziman | Full-Stack React & Python Developer for Startups</title>
				<meta
					name="description"
					content="Senior full-stack engineer specializing in React, TypeScript, Python, and AI integrations. I build high-density UIs and production-ready MVPs for founders and product teams. Book a scope call."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://edshaziman.com/" />

				{/* Open Graph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://edshaziman.com/" />
				<meta
					property="og:title"
					content="Ed Shaziman | Full-Stack React & Python Developer"
				/>
				<meta
					property="og:description"
					content="I build high-density UIs, robust APIs, and AI-powered workflows for founders and product teams. Clear ownership from scope to launch."
				/>
				<meta property="og:image" content="https://edshaziman.com/images/og-preview.jpg" />

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Ed Shaziman | Full-Stack Developer" />
				<meta
					name="twitter:description"
					content="Turning vague requirements into production-ready products."
				/>
				<meta name="twitter:image" content="https://edshaziman.com/images/og-preview.jpg" />

				{/* JSON-LD Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'Erdoan Shaziman',
							alternateName: 'Ed Shaziman',
							jobTitle: 'Full-Stack Software Engineer',
							url: 'https://edshaziman.com',
							email: 'erdoanshaziman@gmail.com',
							address: {
								'@type': 'PostalAddress',
								addressLocality: 'Carlstadt',
								addressRegion: 'NJ'
							},
							sameAs: [
								'https://www.linkedin.com/in/erdoan-ed-shaziman-0533611b9',
								'https://github.com/shazy89'
							],
							knowsAbout: [
								'React',
								'TypeScript',
								'Python',
								'Next.js',
								'FastAPI',
								'AI Integration',
								'Full-Stack Development',
								'MVP Development'
							]
						})
					}}
				/>
			</Head>
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
		</>
	);
};

export default Home;
