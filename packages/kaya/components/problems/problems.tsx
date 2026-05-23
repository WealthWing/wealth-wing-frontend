import { motion, useReducedMotion } from 'framer-motion';

import {
	FRICTION_HEADER,
	FRICTION_LABELS,
	FRICTION_MATRIX,
	FrictionItem
} from './problems.definitions';
import { problemsStyles } from './problems.styles';

const smoothEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.08 }
	}
};

const rowVariants = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: smoothEase }
	}
};

const headerVariants = {
	hidden: { opacity: 0, y: 14 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: smoothEase }
	}
};

type FrictionRowProps = {
	item: FrictionItem;
	index: number;
	reducedMotion: boolean;
};

const FrictionRow = ({ item, reducedMotion }: FrictionRowProps) => (
	<motion.div css={problemsStyles.row} {...(reducedMotion ? {} : { variants: rowVariants })}>
		<div css={problemsStyles.trapCell}>
			<span css={problemsStyles.bullet} aria-hidden="true">
				✕
			</span>
			<span css={problemsStyles.cellText}>{item.trap}</span>
		</div>
		<div css={problemsStyles.fixCell}>
			<span css={problemsStyles.checkmark} aria-hidden="true">
				✓
			</span>
			<span css={problemsStyles.cellText}>{item.fix}</span>
		</div>
	</motion.div>
);

export const ProblemsSection = () => {
	const shouldReduceMotion = useReducedMotion() ?? false;

	const containerAnimationProps = shouldReduceMotion
		? {}
		: {
				variants: containerVariants,
				initial: 'hidden' as const,
				whileInView: 'visible' as const,
				viewport: { once: true, amount: 0.1 }
		  };

	return (
		<section css={problemsStyles.root} aria-labelledby="problems-title">
			<div css={problemsStyles.inner}>
				<motion.div
					css={problemsStyles.header}
					{...(shouldReduceMotion
						? {}
						: {
								variants: {
									hidden: { opacity: 0, y: 14 },
									visible: {
										opacity: 1,
										y: 0,
										transition: { duration: 0.5, ease: smoothEase }
									}
								},
								initial: 'hidden',
								whileInView: 'visible',
								viewport: { once: true, amount: 0.2 }
						  })}
				>
					<p css={problemsStyles.eyebrow} aria-hidden="true">
						{FRICTION_HEADER.eyebrow}
					</p>
					<h2 css={problemsStyles.heading} id="problems-title">
						{FRICTION_HEADER.heading}
					</h2>
					<p css={problemsStyles.subheading}>{FRICTION_HEADER.sub}</p>
				</motion.div>

				<div css={problemsStyles.comparisonPanel}>
					{/* Column headers — two-column row */}
					<div css={problemsStyles.columnHeaderRow}>
						<div css={[problemsStyles.columnHeader, problemsStyles.trapColumnHeader]}>
							<span css={problemsStyles.trapHeaderIcon} aria-hidden="true">
								✕
							</span>
							{FRICTION_LABELS.trap}
						</div>
						<div css={[problemsStyles.columnHeader, problemsStyles.fixColumnHeader]}>
							<span css={problemsStyles.fixHeaderIcon} aria-hidden="true">
								✓
							</span>
							{FRICTION_LABELS.fix}
						</div>
					</div>

					{/* Friction rows */}
					<motion.div css={problemsStyles.rowsWrapper} {...containerAnimationProps}>
						{FRICTION_MATRIX.map((item, i) => (
							<FrictionRow
								key={i}
								item={item}
								index={i}
								reducedMotion={shouldReduceMotion}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};
