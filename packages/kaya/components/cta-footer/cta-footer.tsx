'use client';

import * as React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

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
	FORM_PROJECT_PLACEHOLDER,
	type FormState,
	FORM_SUCCESS_HEADLINE,
	FORM_SUCCESS_BODY,
	FORM_SUCCESS_RESET_LABEL,
	FORM_ERROR_MESSAGE
} from './cta-footer.definitions';
import { CtaLink } from '../cta-link';
import { ctaFooterStyles } from './cta-footer.styles';

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
	const [formState, setFormState] = React.useState<FormState>('idle');

	const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormState('submitting');

		const form = event.currentTarget;
		const formData = new FormData(form);
		const projectScope = String(formData.get(FORM_PROJECT_NAME) ?? '').trim();
		const email = String(formData.get(FORM_EMAIL_NAME) ?? '').trim();

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					projectScope,
					email
				})
			});

			if (!response.ok) {
				setFormState('error');
				return;
			}

			setFormState('success');
			form.reset();
		} catch {
			setFormState('error');
		}
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

	const formExitProps = shouldReduceMotion
		? {}
		: { exit: 'hidden' as const, variants: itemVariants };
	const successAnimProps = shouldReduceMotion
		? {}
		: {
				initial: 'hidden' as const,
				animate: 'visible' as const,
				exit: 'hidden' as const,
				variants: itemVariants
		  };

	return (
		<div id="contact">
			{/* ── CTA Block ──────────────────────────────────────────────────────── */}
			<section css={ctaFooterStyles.ctaBlock} aria-labelledby="cta-heading">
				<div css={ctaFooterStyles.gridOverlay} aria-hidden="true" />
				<div css={ctaFooterStyles.glowOverlay} aria-hidden="true" />

				<div css={ctaFooterStyles.inner}>
					<motion.div css={ctaFooterStyles.formWrapper} {...containerProps}>
						<AnimatePresence mode="wait">
							{formState === 'success' ? (
								<motion.div
									key="success"
									css={ctaFooterStyles.successPanel}
									aria-live="polite"
									{...successAnimProps}
								>
									<span css={ctaFooterStyles.successIcon} aria-hidden="true" />
									<h2 css={ctaFooterStyles.successHeadline}>
										{FORM_SUCCESS_HEADLINE}
									</h2>
									<p css={ctaFooterStyles.successBody}>{FORM_SUCCESS_BODY}</p>
									<button
										type="button"
										css={ctaFooterStyles.successReset}
										onClick={() => setFormState('idle')}
									>
										{FORM_SUCCESS_RESET_LABEL}
									</button>
								</motion.div>
							) : (
								<motion.div key="form" {...formExitProps}>
									<motion.h2
										id="cta-heading"
										css={ctaFooterStyles.headline}
										{...itemProps}
									>
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
												maxLength={1500}
											/>

											<input
												aria-label="Email address"
												css={ctaFooterStyles.formEmail}
												name={FORM_EMAIL_NAME}
												placeholder={FORM_EMAIL_PLACEHOLDER}
												required
												type="email"
												maxLength={120}
											/>
											<input
												type="text"
												name="company"
												tabIndex={-1}
												autoComplete="off"
												style={{ display: 'none' }}
											/>
											<div css={ctaFooterStyles.formRow}>
												<CtaLink
													as="button"
													type="submit"
													css={[
														ctaFooterStyles.ctaButton,
														formState === 'submitting' &&
															ctaFooterStyles.ctaButtonDisabled
													]}
													aria-disabled={formState === 'submitting'}
												>
													{CTA_BUTTON_LABEL}
												</CtaLink>

												<div
													css={ctaFooterStyles.availabilityPill}
													aria-live="polite"
												>
													<span
														css={ctaFooterStyles.availabilityDot}
														aria-hidden="true"
													/>
													<span>{AVAILABILITY_LABEL}</span>
												</div>
											</div>
											{formState === 'error' && (
												<p css={ctaFooterStyles.formError} role="alert">
													{FORM_ERROR_MESSAGE}
												</p>
											)}
										</form>
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
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
