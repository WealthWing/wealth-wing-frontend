export function formatUSD(number: number) {
	const centsToUsd = number / 100;

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(centsToUsd);
}

export function convertToCents(number: number) {
	const cents = number * 100;

	return cents;
}
