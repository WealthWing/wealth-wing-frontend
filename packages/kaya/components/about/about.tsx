import { motion, useReducedMotion } from 'framer-motion';
import { ABOUT_COPY } from './about.definitions';
import { aboutStyles } from './about.styles';

const smoothEase = [0.16, 1, 0.3, 1] as const;

export const AboutSection = () => {
	const reduceMotion = useReducedMotion();

	const photoVariants = {
		hidden: { opacity: 0, x: reduceMotion ? 0 : -20 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: smoothEase } }
	};

	const textVariants = {
		hidden: { opacity: 0, x: reduceMotion ? 0 : 20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.7,
				ease: smoothEase,
				staggerChildren: 0.1,
				delayChildren: 0.1
			}
		}
	};

	const childVariants = {
		hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: smoothEase } }
	};

	return (
		<section css={aboutStyles.root} aria-labelledby="about-heading">
			<div css={aboutStyles.inner}>
				<div css={aboutStyles.grid}>
					{/* Photo placeholder — replace div with <img> once photo is ready */}
					<motion.div
						variants={photoVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.15 }}
					>
						<div css={aboutStyles.photoBox} role="img" aria-label="Photo of Ed" />
					</motion.div>

					{/* Text column */}
					<motion.div
						css={aboutStyles.textColumn}
						variants={textVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.15 }}
					>
						<motion.p css={aboutStyles.eyebrow} variants={childVariants} aria-hidden="true">
							{ABOUT_COPY.eyebrow}
						</motion.p>
						<motion.h2 css={aboutStyles.heading} id="about-heading" variants={childVariants}>
							{ABOUT_COPY.heading}
						</motion.h2>
						<motion.p css={aboutStyles.pullQuote} variants={childVariants}>
							{ABOUT_COPY.pullQuote}
						</motion.p>
						<motion.p css={aboutStyles.body} variants={childVariants}>
							{ABOUT_COPY.body}
						</motion.p>
						<motion.div variants={childVariants}>
							<a css={aboutStyles.cta} href={ABOUT_COPY.cta.href}>
								{ABOUT_COPY.cta.label}
							</a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
