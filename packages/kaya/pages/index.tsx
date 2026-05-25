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
import { serializedPersonJsonLd, siteMetadata } from '../metadata';

const page = css({
	background: theme.color.pageBackground,
	color: theme.color.textPrimary,
	minHeight: '100vh'
});

const Home = () => {
	return (
		<>
			<Head>
				<title>{siteMetadata.title}</title>
				<meta name="description" content={siteMetadata.description} key="description" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="application-name" content={siteMetadata.siteName} key="application-name" />
				<meta
					name="apple-mobile-web-app-title"
					content={siteMetadata.siteName}
					key="apple-mobile-web-app-title"
				/>
				<meta name="theme-color" content={siteMetadata.themeColor} key="theme-color" />
				<link rel="canonical" href={siteMetadata.url} key="canonical" />
				<link rel="icon" href={siteMetadata.favicons.icon} sizes="any" key="favicon-ico" />
				<link
					rel="icon"
					href={siteMetadata.favicons.pngIcon}
					type="image/png"
					sizes="96x96"
					key="favicon-png"
				/>
				<link
					rel="icon"
					href={siteMetadata.favicons.svgIcon}
					type="image/svg+xml"
					key="favicon-svg"
				/>
				<link
					rel="apple-touch-icon"
					href={siteMetadata.favicons.appleTouchIcon}
					sizes="180x180"
					key="apple-touch-icon"
				/>
				<link rel="manifest" href={siteMetadata.favicons.manifest} key="manifest" />

				<meta property="og:type" content="website" key="og:type" />
				<meta property="og:url" content={siteMetadata.url} key="og:url" />
				<meta property="og:site_name" content={siteMetadata.siteName} key="og:site_name" />
				<meta property="og:locale" content={siteMetadata.locale} key="og:locale" />
				<meta property="og:title" content={siteMetadata.twitterTitle} key="og:title" />
				<meta
					property="og:description"
					content={siteMetadata.shortDescription}
					key="og:description"
				/>
				<meta property="og:image" content={siteMetadata.ogImage} key="og:image" />

				<meta name="twitter:card" content={siteMetadata.twitterCard} key="twitter:card" />
				<meta name="twitter:title" content={siteMetadata.twitterTitle} key="twitter:title" />
				<meta
					name="twitter:description"
					content={siteMetadata.twitterDescription}
					key="twitter:description"
				/>
				<meta name="twitter:image" content={siteMetadata.ogImage} key="twitter:image" />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: serializedPersonJsonLd
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
