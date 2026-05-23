import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Icon } from '@wealth-wing/tayo';

import { TRUST_PILLARS, TrustPillarItem } from './trust-pillars.definitions';
import { trustPillarsStyles } from './trust-pillars.styles';

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

type TrustPillarCardProps = {
	item: TrustPillarItem;
	reducedMotion: boolean;
};

const TrustPillarCard = ({ item, reducedMotion }: TrustPillarCardProps) => {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<motion.article
			css={trustPillarsStyles.card}
			{...(reducedMotion ? {} : { variants: cardVariants })}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div css={trustPillarsStyles.iconWrapper}>
				<Icon
					name={item.icon}
					size="s32"
					color={isHovered ? 'primary100' : 'indigo20'}
					aria-hidden="true"
				/>
			</div>
			<h3 css={trustPillarsStyles.cardTitle}>{item.title}</h3>
			<p css={trustPillarsStyles.cardBody}>{item.body}</p>
		</motion.article>
	);
};

export const TrustPillarsSection = () => {
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
		<section css={trustPillarsStyles.root} aria-labelledby="trust-pillars-heading">
			<div css={trustPillarsStyles.inner}>
				<header css={trustPillarsStyles.header}>
					<p css={trustPillarsStyles.eyebrow} aria-hidden="true">
						Reliability
					</p>
					<h2 css={trustPillarsStyles.heading} id="trust-pillars-heading">
						Working with a developer
						<br />
						shouldn&apos;t feel like a gamble.
					</h2>
					<p css={trustPillarsStyles.subheadline}>
						I focus on transparency, predictability, and business outcomes so you
						don&apos;t have to micromanage.
					</p>
				</header>

				<motion.div css={trustPillarsStyles.grid} {...containerAnimationProps}>
					{TRUST_PILLARS.map((item) => (
						<TrustPillarCard
							key={item.title}
							item={item}
							reducedMotion={shouldReduceMotion}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};
