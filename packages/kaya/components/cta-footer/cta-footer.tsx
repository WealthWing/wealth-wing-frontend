'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import {
	AVAILABILITY_LABEL,
	CTA_BUTTON_LABEL,
	CTA_HEADLINE_PARTS,
	CTA_SUBTEXT,
	FOOTER_COPYRIGHT,
	FOOTER_LINKS,
	FOOTER_NAME,
	FOOTER_TAGLINE,
	FORM_EMAIL_PLACEHOLDER,
	FORM_PROJECT_PLACEHOLDER
} from './cta-footer.definitions';
import { CtaLink } from '../cta-link';
import { ctaFooterStyles } from './cta-footer.styles';

const CONTACT_EMAIL = 'hello@edshaziman.com';
const FORM_EMAIL_NAME = 'email';
const FORM_PROJECT_NAME = 'projectScope';

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

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const projectScope = String(formData.get(FORM_PROJECT_NAME) ?? '').trim();
		const email = String(formData.get(FORM_EMAIL_NAME) ?? '').trim();
		const subject = encodeURIComponent('System Scope Call');
		const body = encodeURIComponent(
			['Project scope / goals:', projectScope, '', 'Reply-to email:', email].join('\n')
		);

		window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
	};

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
					<motion.div css={ctaFooterStyles.formWrapper} {...containerProps}>
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
							<form css={ctaFooterStyles.form} onSubmit={handleSubmit}>
								<textarea
									aria-label="Project scope and goals"
									css={ctaFooterStyles.formTextarea}
									name={FORM_PROJECT_NAME}
									placeholder={FORM_PROJECT_PLACEHOLDER}
									required
								/>

								<input
									aria-label="Email address"
									css={ctaFooterStyles.formEmail}
									name={FORM_EMAIL_NAME}
									placeholder={FORM_EMAIL_PLACEHOLDER}
									required
									type="email"
								/>
								<div css={ctaFooterStyles.formRow}>
									<CtaLink
										as="button"
										type="submit"
										css={ctaFooterStyles.ctaButton}
									>
										{CTA_BUTTON_LABEL}
									</CtaLink>

									<div css={ctaFooterStyles.availabilityPill} aria-live="polite">
										<span
											css={ctaFooterStyles.availabilityDot}
											aria-hidden="true"
										/>
										<span>{AVAILABILITY_LABEL}</span>
									</div>
								</div>
							</form>
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
