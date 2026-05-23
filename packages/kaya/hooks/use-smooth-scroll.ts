const HEADER_OFFSET = 80; // matches the 5rem fixed header height

export const useSmoothScroll = () => {
	const scrollToSection = (hash: string) => {
		const id = hash.startsWith('#') ? hash.slice(1) : hash;
		const element = document.getElementById(id);

		if (!element) return;

		const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
		window.scrollTo({ top, behavior: 'smooth' });
	};

	return { scrollToSection };
};
