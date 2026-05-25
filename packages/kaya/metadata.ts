export const siteMetadata = {
	siteName: 'Ed Shaziman',
	title: 'Ed Shaziman | Full-Stack React & Python Developer for Startups',
	description:
		'Senior full-stack engineer specializing in React, TypeScript, Python, and AI integrations. I build high-density UIs and production-ready MVPs for founders and product teams. Book a scope call.',
	shortDescription:
		'I build high-density UIs, robust APIs, and AI-powered workflows for founders and product teams. Clear ownership from scope to launch.',
	url: 'https://edshaziman.com/',
	ogImage: 'https://edshaziman.com/images/og-preview.jpg',
	locale: 'en_US',
	themeColor: '#06070a',
	twitterCard: 'summary_large_image',
	twitterTitle: 'Ed Shaziman | Full-Stack Developer',
	twitterDescription: 'Turning vague requirements into production-ready products.',
	favicons: {
		icon: '/favicon/favicon.ico',
		svgIcon: '/favicon/favicon.svg',
		pngIcon: '/favicon/favicon-96x96.png',
		appleTouchIcon: '/favicon/apple-touch-icon.png',
		manifest: '/favicon/site.webmanifest'
	}
} as const;

export const personJsonLd = {
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
} as const;

export const serializedPersonJsonLd = JSON.stringify(personJsonLd).replace(/</g, '\\u003c');
