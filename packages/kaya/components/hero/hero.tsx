import { motion } from 'framer-motion';

import { HeroProps } from './hero.definitions';
import { heroStyles } from './hero.styles';

const smoothEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.13, delayChildren: 0.1 }
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 22 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: smoothEase }
	}
};

const mockupVariants = {
	hidden: { opacity: 0, x: 40, scale: 0.97 },
	visible: {
		opacity: 1,
		x: 0,
		scale: 1,
		transition: { duration: 0.7, ease: smoothEase, delay: 0.25 }
	}
};

const DashboardMockup = () => (
	<div css={heroStyles.mockup}>
		{/* Window chrome */}
		<div css={heroStyles.mockupChrome}>
			<span css={[heroStyles.chromeDot, heroStyles.chromeDotError]} />
			<span css={[heroStyles.chromeDot, heroStyles.chromeDotWarning]} />
			<span css={[heroStyles.chromeDot, heroStyles.chromeDotSuccess]} />
			<span css={heroStyles.chromeLabel}>clean.ts</span>
		</div>

		{/* Code card */}
		<div css={heroStyles.mockupPad}>
			<div css={heroStyles.mockupCodeCard}>
				<pre css={heroStyles.code}>
					<span css={heroStyles.codeKeyword}>const</span>{' '}
					<span css={heroStyles.codeIdent}>clean</span>{' '}
					<span css={heroStyles.codeOp}>=</span>{' '}
					<span css={heroStyles.codeIdent2}>code</span>{' '}
					<span css={heroStyles.codeOp}>+</span>{' '}
					<span css={heroStyles.codeIdent3}>UI</span>
				</pre>
			</div>
		</div>

		{/* Connector */}
		<div css={heroStyles.connector} aria-hidden="true">
			<div css={heroStyles.connectorLine} />
			<span css={heroStyles.connectorArrow}>↓</span>
		</div>

		{/* UI output card */}
		<div css={heroStyles.mockupPad}>
			<div css={heroStyles.mockupUiCard}>
				<div css={heroStyles.uiCardHeader}>
					<span css={heroStyles.uiStatusDot} />
					<span css={heroStyles.uiLabel}>Polished UI</span>
				</div>

				<div css={heroStyles.uiMetrics}>
					<div css={heroStyles.uiMetricRow}>
						<span css={heroStyles.uiMetricCheck}>✓</span>
						<span css={heroStyles.uiMetricText}>Ships on time</span>
						<span css={heroStyles.uiMetricBadge}>98%</span>
					</div>

					<div css={heroStyles.uiMetricRow}>
						<span css={heroStyles.uiMetricCheck}>✓</span>
						<span css={heroStyles.uiMetricText}>Clean codebase</span>
						<span css={heroStyles.uiMetricBadge}>Solid</span>
					</div>

					<div css={heroStyles.progressTrack}>
						<motion.div
							css={heroStyles.progressFill}
							initial={{ width: 0 }}
							animate={{ width: '92%' }}
							transition={{ duration: 1.3, delay: 1.1, ease: smoothEase }}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export const Hero = ({ showEyebrow = false }: HeroProps) => {
	return (
		<section css={heroStyles.section} aria-label="Hero">
			<div css={heroStyles.gridOverlay} aria-hidden="true" />
			<div css={heroStyles.inner}>
				<div css={heroStyles.content}>
					{/* Left: copy */}
					<motion.div
						css={heroStyles.leftCol}
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{showEyebrow && (
							<motion.p css={heroStyles.eyebrow} variants={itemVariants}>
								Trusted by remote teams
							</motion.p>
						)}

						<motion.h1 css={heroStyles.headline} variants={itemVariants}>
							Reliable software, shipped{' '}
							<span css={heroStyles.accent}>without the chaos.</span>
						</motion.h1>

						<motion.p css={heroStyles.body} variants={itemVariants}>
							I help small teams clean up messy apps, modernize outdated interfaces,
							and ship websites, dashboards, internal tools, and full-stack features
							that are easier to maintain.
						</motion.p>

						<motion.div css={heroStyles.ctaGroup} variants={itemVariants}>
							<a href="#" css={heroStyles.ctaPrimary}>
								Start the conversation
								<span css={heroStyles.ctaArrow} aria-hidden="true">
									↗
								</span>
							</a>
							<a href="#" css={heroStyles.ctaSecondary}>
								See how I work
							</a>
						</motion.div>
					</motion.div>

					{/* Right: dashboard mockup */}
					<motion.div
						css={heroStyles.rightCol}
						variants={mockupVariants}
						initial="hidden"
						animate="visible"
						aria-hidden="true"
					>
						<DashboardMockup />
					</motion.div>
				</div>
			</div>
		</section>
	);
};
