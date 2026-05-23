import { motion } from 'framer-motion';

import { FOOTPRINT_SLOTS } from './production-footprint.definitions';
import { productionFootprintStyles } from './production-footprint.styles';
import { TrustStrip } from '../trust-strip';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.2 }
	}
};

const itemVariants = {
	hidden: { opacity: 0, scale: 0.9, y: 10 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
	}
};

export const ProductionFootprint = () => {
	return (
		<section css={productionFootprintStyles.root} aria-label="Live production footprint">
			<div css={productionFootprintStyles.inner}>
				<p css={productionFootprintStyles.label}>
					Live Production Footprint — Systems I&apos;ve shipped code for are currently
					running at:
				</p>

				<div css={productionFootprintStyles.divider} aria-hidden="true" />

				<motion.div
					css={productionFootprintStyles.slots}
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-20px' }}
				>
					{FOOTPRINT_SLOTS.map(({ label, industry }) => (
						<motion.div
							key={industry}
							css={productionFootprintStyles.slot}
							variants={itemVariants}
						>
							<span css={productionFootprintStyles.slotDot} aria-hidden="true" />
							<span css={productionFootprintStyles.slotLabel}>{label}</span>
						</motion.div>
					))}
				</motion.div>
			</div>
			<TrustStrip />
		</section>
	);
};
