import { motion } from 'framer-motion';

import { ProblemItem, PROBLEMS } from './problems.definitions';
import { problemsStyles } from './problems.styles';

const smoothEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.12, delayChildren: 0.1 }
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: smoothEase }
	}
};

const ProblemCard = ({ number, title, body }: ProblemItem) => (
	<motion.article css={problemsStyles.card} variants={itemVariants}>
		<span css={problemsStyles.cardNumber} aria-hidden="true">
			{number}
		</span>
		<h3 css={problemsStyles.cardTitle}>{title}</h3>
		<p css={problemsStyles.cardBody}>{body}</p>
	</motion.article>
);

export const ProblemsSection = () => (
	<section css={problemsStyles.root} aria-labelledby="problems-title">
		<div css={problemsStyles.inner}>
			<div css={problemsStyles.header}>
				<p css={problemsStyles.eyebrow} aria-hidden="true">
					Types of Problems I Solve
				</p>
				<h2 css={problemsStyles.heading} id="problems-title">
					I understand the messy
					<br />
					situation you are in.
				</h2>
			</div>
			<motion.div
				css={problemsStyles.grid}
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.15, once: true }}
			>
				{PROBLEMS.map((problem) => (
					<ProblemCard key={problem.number} {...problem} />
				))}
			</motion.div>
		</div>
	</section>
);
