import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { PROCESS_STEPS, ProcessStep } from './process.definitions';
import { processStyles } from './process.styles';

const smoothEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.05 }
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: smoothEase }
	}
};

type StepCardProps = {
	step: ProcessStep;
};

const StepCard = ({ step }: StepCardProps) => (
	<motion.li css={processStyles.step} variants={itemVariants}>
		<div css={processStyles.circleWrapper}>
			<div css={processStyles.circle}>
				{/* Number is decorative — the step title carries the semantic label */}
				<span css={processStyles.stepNumber} aria-hidden="true">
					{step.number}
				</span>
			</div>
		</div>

		<div css={processStyles.stepContent}>
			<h3 css={processStyles.stepTitle}>{step.title}</h3>
			<p css={processStyles.stepBody}>{step.body}</p>
		</div>
	</motion.li>
);

export const ProcessSection = () => {
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
		<section
			id="operational-blueprint"
			css={processStyles.root}
			aria-labelledby="operational-blueprint-heading"
		>
			<div css={processStyles.inner}>
				<header css={processStyles.header}>
					<p css={processStyles.eyebrow} aria-hidden="true">
						Operational Blueprint
					</p>
					<h2 css={processStyles.heading} id="operational-blueprint-heading">
						The Planner-Executor Framework.
					</h2>
				</header>

				<motion.ol css={processStyles.timeline} {...containerAnimationProps}>
					{PROCESS_STEPS.map((step) => (
						<StepCard key={step.number} step={step} />
					))}
				</motion.ol>
			</div>
		</section>
	);
};
