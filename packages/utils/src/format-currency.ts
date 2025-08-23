type Options = {
	compactDisplay?: Intl.NumberFormatOptions['compactDisplay'];
};

export function formatUSD(number: number, options?: Options) {
	const centsToUsd = number / 100;

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		...(options?.compactDisplay && {
			notation: 'compact',
			compactDisplay: options.compactDisplay
		})
	}).format(centsToUsd);
}

export function convertToCents(number: number) {
	const cents = number * 100;

	return cents;
}
