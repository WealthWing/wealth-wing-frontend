import { Link } from 'react-router-dom';
import { PageNotFound } from 'router/not-found';
import { isLocalSandboxHost } from 'router/sandbox/local-only';
import {
	activeNavLink,
	content,
	header,
	navigation,
	navLink,
	page,
	panel
} from 'router/sandbox/sandbox-page.styles';

type SandboxRoute = 'home' | 'architecture' | 'motion';

type SandboxPageProps = {
	activeRoute: SandboxRoute;
};

const routes = [
	{ href: '/sandbox', label: 'Overview', route: 'home' as const },
	{ href: '/sandbox/architecture', label: 'Architecture', route: 'architecture' as const },
	{ href: '/sandbox/motion', label: 'Motion', route: 'motion' as const }
];

const SandboxContent = ({ activeRoute }: SandboxPageProps) => {
	if (activeRoute === 'architecture') {
		return (
			<section css={panel} aria-labelledby="architecture-demo-heading">
				<h2 id="architecture-demo-heading">Architecture demo</h2>
				<p>
					A small route for testing system diagrams, canvas layouts, and responsive
					states.
				</p>
			</section>
		);
	}

	if (activeRoute === 'motion') {
		return (
			<section css={panel} aria-labelledby="motion-demo-heading">
				<h2 id="motion-demo-heading">Motion demo</h2>
				<p>
					A separate route for trying entrance, hover, and transition behavior without
					touching production pages.
				</p>
			</section>
		);
	}

	return (
		<section css={content} aria-labelledby="sandbox-overview-heading">
			<h2 id="sandbox-overview-heading">Local experiments</h2>
			<p>Use the controls above to switch between isolated demo routes.</p>
		</section>
	);
};

export const SandboxPage = ({ activeRoute }: SandboxPageProps) => {
	if (typeof window !== 'undefined' && !isLocalSandboxHost(window.location.host)) {
		return <PageNotFound />;
	}

	return (
		<main css={page}>
			<header css={header}>
				<h1>Sandbox</h1>
				<nav css={navigation} aria-label="Sandbox demos">
					{routes.map(({ href, label, route }) => {
						const isActive = route === activeRoute;

						return (
							<Link
								key={href}
								to={href}
								css={[navLink, isActive && activeNavLink]}
								aria-current={isActive ? 'page' : undefined}
							>
								{label}
							</Link>
						);
					})}
				</nav>
			</header>
			<SandboxContent activeRoute={activeRoute} />
		</main>
	);
};
