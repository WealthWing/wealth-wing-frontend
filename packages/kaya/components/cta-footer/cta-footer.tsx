import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import {
	AVAILABILITY_LABEL,
	CTA_BUTTON_HREF,
	CTA_BUTTON_LABEL,
	CTA_HEADLINE_PARTS,
	CTA_SUBTEXT,
	FOOTER_COPYRIGHT,
	FOOTER_LINKS,
	FOOTER_NAME,
	FOOTER_TAGLINE
} from './cta-footer.definitions';
import { ctaFooterStyles } from './cta-footer.styles';

const smoothEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.12, delayChildren: 0.05 }
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: smoothEase }
	}
};

export const CtaFooter = () => {
	const shouldReduceMotion = useReducedMotion() ?? false;

	const containerProps = shouldReduceMotion
		? {}
		: {
				variants: containerVariants,
				initial: 'hidden' as const,
				whileInView: 'visible' as const,
				viewport: { once: true, amount: 0.2 }
		  };

	const itemProps = shouldReduceMotion ? {} : { variants: itemVariants };

	return (
		<div id="contact">
			{/* ── CTA Block ──────────────────────────────────────────────────────── */}
			<section css={ctaFooterStyles.ctaBlock} aria-labelledby="cta-heading">
				<div css={ctaFooterStyles.gridOverlay} aria-hidden="true" />
				<div css={ctaFooterStyles.glowOverlay} aria-hidden="true" />

				<div css={ctaFooterStyles.inner}>
					<motion.div {...containerProps}>
						<motion.h2 id="cta-heading" css={ctaFooterStyles.headline} {...itemProps}>
							{CTA_HEADLINE_PARTS.map(({ text, accent }, index) =>
								accent ? (
									<span key={index} css={ctaFooterStyles.accentWord}>
										{text}
									</span>
								) : (
									<React.Fragment key={index}>{text}</React.Fragment>
								)
							)}
						</motion.h2>

						<motion.p css={ctaFooterStyles.subtext} {...itemProps}>
							{CTA_SUBTEXT}
						</motion.p>

						<motion.div {...itemProps}>
							<a href={CTA_BUTTON_HREF} css={ctaFooterStyles.ctaButton}>
								{CTA_BUTTON_LABEL}
								<span css={ctaFooterStyles.ctaArrow} aria-hidden="true">
									↗
								</span>
							</a>
						</motion.div>

						<motion.div
							css={ctaFooterStyles.availabilityPill}
							aria-live="polite"
							{...itemProps}
						>
							<span css={ctaFooterStyles.availabilityDot} aria-hidden="true" />
							<span>{AVAILABILITY_LABEL}</span>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* ── Footer ─────────────────────────────────────────────────────────── */}
			<footer css={ctaFooterStyles.footer}>
				<div css={ctaFooterStyles.footerInner}>
					<div css={ctaFooterStyles.footerIdentity}>
						<p css={ctaFooterStyles.footerName}>{FOOTER_NAME}</p>
						<p css={ctaFooterStyles.footerTagline}>{FOOTER_TAGLINE}</p>
					</div>

					<nav css={ctaFooterStyles.footerLinks} aria-label="Footer links">
						{FOOTER_LINKS.map(({ label, href, ariaLabel }) =>
							href ? (
								<a
									key={label}
									href={href}
									aria-label={ariaLabel}
									css={ctaFooterStyles.footerLink}
									{...(href.startsWith('https')
										? { target: '_blank', rel: 'noopener noreferrer' }
										: {})}
								>
									{label}
								</a>
							) : (
								<span key={label} css={ctaFooterStyles.footerText}>
									{label}
								</span>
							)
						)}
					</nav>

					<p css={ctaFooterStyles.footerCopyright}>{FOOTER_COPYRIGHT}</p>
				</div>
			</footer>
		</div>
	);
};
