import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Icon } from '@wealth-wing/tayo';

import {
	CAPABILITIES,
	CAPABILITIES_HEADER,
	TECH_STACK,
	CapabilityItem
} from './services.definitions';
import { servicesStyles } from './services.styles';

const smoothEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.05 }
	}
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: smoothEase }
	}
};

type CapabilityCardProps = {
	item: CapabilityItem;
	reducedMotion: boolean;
};

const CapabilityCard = ({ item, reducedMotion }: CapabilityCardProps) => {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<motion.article
			css={servicesStyles.card}
			{...(reducedMotion ? {} : { variants: cardVariants })}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div css={servicesStyles.iconWrapper}>
				<Icon
					name={item.icon}
					size="s32"
					color={isHovered ? 'primary100' : 'indigo20'}
					aria-hidden="true"
				/>
			</div>
			<h3 css={servicesStyles.cardTitle}>{item.title}</h3>
			<p css={servicesStyles.cardBody}>{item.description}</p>
			<div css={servicesStyles.tagGroup}>
				{item.tags.map((tag) => (
					<span key={tag} css={servicesStyles.tag}>
						{tag}
					</span>
				))}
			</div>
		</motion.article>
	);
};

export const ServicesSection = () => {
	const shouldReduceMotion = useReducedMotion() ?? false;

	const containerAnimationProps = shouldReduceMotion
		? {}
		: {
				variants: containerVariants,
				initial: 'hidden' as const,
				whileInView: 'visible' as const,
				viewport: { once: true, amount: 0.15 }
		  };

	return (
		<section id="work" css={servicesStyles.root} aria-labelledby="services-heading">
			<div css={servicesStyles.inner}>
				<header css={servicesStyles.header}>
					<p css={servicesStyles.eyebrow} aria-hidden="true">
						{CAPABILITIES_HEADER.eyebrow}
					</p>
					<h2 css={servicesStyles.heading} id="services-heading">
						{CAPABILITIES_HEADER.heading}
					</h2>
				</header>

				<motion.div css={servicesStyles.grid} {...containerAnimationProps}>
					{CAPABILITIES.map((item) => (
						<CapabilityCard
							key={item.title}
							item={item}
							reducedMotion={shouldReduceMotion}
						/>
					))}
				</motion.div>

				<div css={servicesStyles.techStrip}>
					<div css={servicesStyles.techStripRow}>
						<span css={servicesStyles.techStripLabel}>{TECH_STACK.label}</span>
						<span css={servicesStyles.techStripItems}>
							{TECH_STACK.items.join(' · ')}
						</span>
					</div>
					<div css={servicesStyles.techStripDivider} aria-hidden="true" />
					<div css={servicesStyles.techStripRow}>
						<span css={servicesStyles.techStripLabel}>Best for</span>
						<span css={servicesStyles.techStripItems}>{TECH_STACK.bestFor}</span>
					</div>
				</div>

				<div css={servicesStyles.ctaWrapper}>
					<a href="#contact" css={servicesStyles.ctaLink}>
						Let&apos;s discuss your project
						<span css={servicesStyles.ctaArrow} aria-hidden="true">
							↗
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};
