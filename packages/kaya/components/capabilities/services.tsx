import * as React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { ARCHITECTURE_TRACKS, ARCHITECTURE_HEADER } from './services.definitions';
import type { ArchitectureTrack } from './services.definitions';
import { servicesStyles } from './services.styles';

const smoothEase = [0.16, 1, 0.3, 1] as const;

const ArchitectureCanvas = dynamic(
	() => import('./architecture-canvas').then((m) => ({ default: m.ArchitectureCanvas })),
	{ ssr: false, loading: () => <div css={servicesStyles.canvasWrapper} /> }
);

const panelVariants = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: smoothEase } },
	exit: { opacity: 0, y: 8, transition: { duration: 0.18, ease: smoothEase } }
};

type TrackNavProps = {
	activeTrack: ArchitectureTrack['id'];
	onSelect: (id: ArchitectureTrack['id']) => void;
	reducedMotion: boolean;
};

const TrackNav = ({ activeTrack, onSelect, reducedMotion }: TrackNavProps) => {
	const trackIds = ARCHITECTURE_TRACKS.map((t) => t.id);
	const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
		let nextIndex: number | null = null;

		if (e.key === 'ArrowRight') {
			nextIndex = (index + 1) % trackIds.length;
		} else if (e.key === 'ArrowLeft') {
			nextIndex = (index - 1 + trackIds.length) % trackIds.length;
		} else if (e.key === 'Home') {
			nextIndex = 0;
		} else if (e.key === 'End') {
			nextIndex = trackIds.length - 1;
		}

		if (nextIndex !== null) {
			e.preventDefault();
			onSelect(trackIds[nextIndex]);
			tabRefs.current[nextIndex]?.focus();
		}
	};

	return (
		<div css={servicesStyles.trackNav} role="tablist" aria-label="Architecture tracks">
			{ARCHITECTURE_TRACKS.map((track, i) => {
				const isActive = track.id === activeTrack;
				return (
					<button
						key={track.id}
						ref={(el) => {
							tabRefs.current[i] = el;
						}}
						role="tab"
						tabIndex={isActive ? 0 : -1}
						aria-selected={isActive}
						aria-controls={`panel-${track.id}`}
						id={`tab-${track.id}`}
						css={[servicesStyles.trackTab, isActive && servicesStyles.trackTabActive]}
						onClick={() => onSelect(track.id)}
						onKeyDown={(e) => handleKeyDown(e, i)}
					>
						{track.tabLabel}
						{isActive && (
							<motion.div
								layoutId={reducedMotion ? undefined : 'tab-indicator'}
								css={servicesStyles.tabIndicator}
							/>
						)}
					</button>
				);
			})}
		</div>
	);
};

export const ServicesSection = () => {
	const shouldReduceMotion = useReducedMotion() ?? false;
	const [activeTrack, setActiveTrack] = React.useState<ArchitectureTrack['id']>('ui');
	const track = ARCHITECTURE_TRACKS.find((t) => t.id === activeTrack)!;

	return (
		<section id="work" css={servicesStyles.root} aria-labelledby="services-heading">
			<div css={servicesStyles.inner}>
				<header css={servicesStyles.header}>
					<p css={servicesStyles.eyebrow} aria-hidden="true">
						{ARCHITECTURE_HEADER.eyebrow}
					</p>
					<h2 css={servicesStyles.heading} id="services-heading">
						{ARCHITECTURE_HEADER.heading}
					</h2>
					<p css={servicesStyles.subheading}>{ARCHITECTURE_HEADER.subheading}</p>
				</header>

				<TrackNav
					activeTrack={activeTrack}
					onSelect={setActiveTrack}
					reducedMotion={shouldReduceMotion}
				/>

				<div css={servicesStyles.hubBody}>
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTrack}
							css={servicesStyles.metricsPanel}
							role="tabpanel"
							id={`panel-${activeTrack}`}
							aria-labelledby={`tab-${activeTrack}`}
							{...(shouldReduceMotion
								? {}
								: {
										variants: panelVariants,
										initial: 'hidden',
										animate: 'visible',
										exit: 'exit'
								  })}
						>
							<p css={servicesStyles.coreFocus}>{track.coreFocus}</p>

							<div css={servicesStyles.stackRow}>
								{track.stackItems.map((item) => (
									<span key={item} css={servicesStyles.tag}>
										{item}
									</span>
								))}
							</div>

							<dl css={servicesStyles.metricsBlock}>
								{track.metrics.map((m) => (
									<React.Fragment key={m.key}>
										<dt css={servicesStyles.metricKey}>{m.key}</dt>
										<dd css={servicesStyles.metricValue}>{m.value}</dd>
									</React.Fragment>
								))}
							</dl>

							<p css={servicesStyles.bestUsedFor}>{track.bestUsedFor}</p>
						</motion.div>
					</AnimatePresence>

					<div css={servicesStyles.canvasWrapper}>
						<ArchitectureCanvas
							nodes={track.flowNodes}
							edges={track.flowEdges}
							trackId={activeTrack}
							coreFocus={track.coreFocus}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
