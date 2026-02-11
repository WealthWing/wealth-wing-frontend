export function formatUrl(url?: string) {
	if (!url) {
		return null;
	}
	// Remove the protocol (http, https, etc.) and anything after '?'
	const domainMatch = url.match(/^(?:https?:\/\/)?(?:www\.)?([^/?\n]+)/i);
	if (domainMatch) {
		return domainMatch[1];
	}

	return null;
}

export function formatEmail(email: string) {
	const [local, domain] = email.split('@');

	if (!local || !domain) {
		return 'Invalid email';
	}

	const maskedLocal = local[0] + '*'.repeat(local.length - 1);
	const maskedDomain = domain[0] + '*'.repeat(domain.length - 1);

	return `${maskedLocal}@${maskedDomain}`;
}

export function capitalizedFirstLetter(str?: string) {
	if (!str) return str;
	return str.charAt(0).toUpperCase() + str.slice(1);
}
