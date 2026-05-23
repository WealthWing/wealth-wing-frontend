import { Icon } from '@wealth-wing/tayo';

import { TRUST_ITEMS } from './trust-strip.definitions';
import { trustStripStyles } from './trust-strip.styles';

export const TrustStrip = () => {
	return (
		<section css={trustStripStyles.root} aria-label="Core values">
			<div css={trustStripStyles.inner}>
				{TRUST_ITEMS.map(({ icon, label }) => (
					<div key={label} css={trustStripStyles.item}>
						<Icon name={icon} size="s24" color="primary100" aria-hidden="true" />
						<span css={trustStripStyles.label}>{label}</span>
					</div>
				))}
			</div>
		</section>
	);
};
