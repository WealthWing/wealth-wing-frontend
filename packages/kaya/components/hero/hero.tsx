import { motion } from 'framer-motion';

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

const cardVariants = {
	hidden: { opacity: 0, x: 40, scale: 0.97 },
	visible: {
		opacity: 1,
		x: 0,
		scale: 1,
		transition: { duration: 0.7, ease: smoothEase, delay: 0.25 }
	}
};

const CapabilityStack = () => (
	<div css={heroStyles.capabilityCard}>
		{/* Card header */}
		<div css={heroStyles.capabilityHeader}>
			<span css={heroStyles.capabilityHeaderLabel}>Capability Stack</span>
			<span css={heroStyles.capabilityHeaderStatus}>
				<span css={heroStyles.capabilityStatusPulse} aria-hidden="true" />
				All systems active
			</span>
		</div>

		{/* Tiers */}
		<div css={heroStyles.capabilityTiers}>
			<div css={heroStyles.capabilityTier}>
				<div css={heroStyles.tierDotWrapper}>
					<span css={heroStyles.tierDotIndigo} aria-hidden="true" />
				</div>
				<div css={heroStyles.tierContent}>
					<span css={heroStyles.tierLabel}>UI Layer</span>
					<span css={heroStyles.tierSub}>High-density dashboards · Data-heavy tools</span>
				</div>
			</div>

			<div css={heroStyles.tierDivider} aria-hidden="true" />

			<div css={heroStyles.capabilityTier}>
				<div css={heroStyles.tierDotWrapper}>
					<span css={heroStyles.tierDotPrimary} aria-hidden="true" />
				</div>
				<div css={heroStyles.tierContent}>
					<span css={heroStyles.tierLabel}>Full-Stack Core</span>
					<span css={heroStyles.tierSub}>APIs · Auth · DB · Infrastructure</span>
				</div>
			</div>

			<div css={heroStyles.tierDivider} aria-hidden="true" />

			<div css={heroStyles.capabilityTier}>
				<div css={heroStyles.tierDotWrapper}>
					<span css={heroStyles.tierDotGreen} aria-hidden="true" />
				</div>
				<div css={heroStyles.tierContent}>
					<span css={heroStyles.tierLabel}>AI Orchestration</span>
					<span css={heroStyles.tierSub}>RAG · Multi-agent · LLM pipelines</span>
				</div>
			</div>
		</div>

		{/* Footer note */}
		<div css={heroStyles.capabilityFooter}>
			<span css={heroStyles.capabilityFooterNote}>No hand-holding required</span>
		</div>
	</div>
);

export const Hero = () => {
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
						<motion.p css={heroStyles.eyebrow} variants={itemVariants}>
							Senior Full-Stack / AI Integration Engineer
						</motion.p>

						<motion.h1 css={heroStyles.headline} variants={itemVariants}>
							Vague Requirements In.{' '}
							<span css={heroStyles.accent}>Production-Ready Products Out.</span>
						</motion.h1>

						<motion.p css={heroStyles.body} variants={itemVariants}>
							I build high-density UIs, robust full-stack architectures, and
							production-ready AI orchestration layers for fast-moving businesses. No
							hand-holding required.
						</motion.p>

						<motion.div css={heroStyles.ctaGroup} variants={itemVariants}>
							<a href="#contact" css={heroStyles.ctaPrimary}>
								Schedule a Scope Call
								<span css={heroStyles.ctaArrow} aria-hidden="true">
									↗
								</span>
							</a>
							<a href="#work" css={heroStyles.ctaSecondary}>
								Explore System Capabilities ↓
							</a>
						</motion.div>
					</motion.div>

					{/* Right: capability stack */}
					<motion.div
						css={heroStyles.rightCol}
						variants={cardVariants}
						initial="hidden"
						animate="visible"
						aria-hidden="true"
					>
						<CapabilityStack />
					</motion.div>
				</div>
			</div>
		</section>
	);
};
