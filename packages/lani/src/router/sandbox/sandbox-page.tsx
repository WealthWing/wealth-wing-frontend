import { Flex, Text } from '@wealth-wing/tayo';
import { IconLabel } from 'components/icon-label';
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
				<Text tag="p">
					A small route for testing system diagrams, canvas layouts, and responsive
					states.
				</Text>
			</section>
		);
	}

	if (activeRoute === 'motion') {
		return (
			<section css={panel} aria-labelledby="motion-demo-heading">
				<h2 id="motion-demo-heading">Motion demo</h2>
				<Text tag="p">
					A separate route for trying entrance, hover, and transition behavior without
					touching production pages.
				</Text>
			</section>
		);
	}

	return (
		<section css={content} aria-labelledby="sandbox-overview-heading">
			<h2 id="sandbox-overview-heading">Local experiments</h2>
			<Text tag="p">Use the controls above to switch between isolated demo routes.</Text>

			<section css={panel} aria-labelledby="icon-label-demo-heading">
				<h2 id="icon-label-demo-heading">IconLabel</h2>
				<Text tag="p">
					Dark tinted tile from the accent family; glyph uses a lighter step so it reads
					clearly (e.g. primary80 wash → primary40 icon).
				</Text>
				<Flex direction="column" alignItems="flex-start" gap="s20">
					<IconLabel iconName="folder" label="Housing" iconSize="s16" />
					<IconLabel iconName="folder" label="Housing" iconSize="s20" />
					<IconLabel
						iconName="folder"
						label="Housing"
						iconSize="s24"
						iconColor="primary100"
					/>
					<IconLabel
						iconName="credit-card"
						label="Subscriptions"
						iconSize="s24"
						iconColor="secondary80"
						font="lg"
					/>
					<IconLabel
						iconName="money-bill"
						label="Shopping"
						iconSize="s32"
						iconColor="green80"
						font="lg"
					/>
					<IconLabel
						iconName="calendar"
						label="Schedule"
						iconSize="s32"
						iconColor="yellow90"
						textColor="textSecondary"
					/>
					<IconLabel
						iconName="warning"
						label="Alerts"
						iconSize="s40"
						iconColor="red80"
						font="h6"
					/>
				</Flex>
			</section>
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
