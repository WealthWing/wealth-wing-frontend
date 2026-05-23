import * as React from 'react';

const HEADER_OFFSET = 80; // matches the 5rem fixed header height

export const useActiveSection = (sectionIds: string[]): string => {
	const [activeId, setActiveId] = React.useState('');
	const idsRef = React.useRef(sectionIds);

	React.useEffect(() => {
		idsRef.current = sectionIds;
	});

	React.useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY + HEADER_OFFSET + 10;
			let current = '';

			for (const id of idsRef.current) {
				const el = document.getElementById(id);
				if (el && el.offsetTop <= scrollY) {
					current = id;
				}
			}

			setActiveId(current);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return activeId;
};
