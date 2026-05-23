import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Icon } from '@wealth-wing/tayo';

import { SERVICES, ServiceItem } from './services.definitions';
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

type ServiceCardProps = {
	item: ServiceItem;
	reducedMotion: boolean;
};

const ServiceCard = ({ item, reducedMotion }: ServiceCardProps) => {
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
						How I help
					</p>
					<h2 css={servicesStyles.heading} id="services-heading">
						What I can take off your plate
					</h2>
				</header>

				<motion.div css={servicesStyles.grid} {...containerAnimationProps}>
					{SERVICES.map((item) => (
						<ServiceCard
							key={item.title}
							item={item}
							reducedMotion={shouldReduceMotion}
						/>
					))}
				</motion.div>

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
