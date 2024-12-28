import { Theme, ThemeDefinitions } from './definitions';

export const darkTheme: ThemeDefinitions = {
	color: {
		primary400: '#2FC194',
		primary300: '#58D5AF',
		primary200: '#95E4CD',
		primary100: '#D2F4E9',
		secondary400: '#6982C7',
		secondary300: '#6982C7',
		secondary100: '#6982C7',
		secondary200: '#FFC2C2'
	},
	space: {
		none: '0',
		s2: '0.125rem',
		s4: '0.25rem',
		s8: '0.50rem',
		s10: '0.625rem',
		s12: '0.75rem',
		s16: '1rem',
		s20: '1.25rem',
		s24: '1.5rem',
		s28: '1.75rem',
		s32: '2rem',
		s36: '2.25rem',
		s40: '2.5rem',
		s64: '4rem',
		s96: '6rem'
	}
};

export const lightTheme: ThemeDefinitions = {
	color: {
		primary400: '#008080',
		primary300: '#008080',
		primary200: '#008080',
		primary100: '#008080',
		secondary400: '#4A3267',
		secondary300: '#4A3267',
		secondary100: '#4A3267',
		secondary200: '#FFC2C2'
	},
	space: {
		none: '0',
		s2: '0.125rem',
		s4: '0.25rem',
		s8: '0.50rem',
		s10: '0.625rem',
		s12: '0.75rem',
		s16: '1rem',
		s20: '1.25rem',
		s24: '1.5rem',
		s28: '1.75rem',
		s32: '2rem',
		s36: '2.25rem',
		s40: '2.5rem',
		s64: '4rem',
		s96: '6rem'
	}
};

export const theme: Theme = {
	color: {
		primary400: 'var(--ww-t-color-primary400)',
		primary300: 'var(--ww-t-color-primary300)',
		primary200: 'var(--ww-t-color-primary200)',
		primary100: 'var(--ww-t-color-primary100)',
		secondary400: 'var(--ww-t-color-secondary400)',
		secondary300: 'var(--ww-t-color-secondary300)',
		secondary100: 'var(--ww-t-color-secondary100)',
		secondary200: 'var(--ww-t-color-secondary200)'
	},
	space: {
		none: 'var(--ww-t-space-none)',
		s2: 'var(--ww-t-space-s2)',
		s4: 'var(--ww-t-space-s4)',
		s8: 'var(--ww-t-space-s8)',
		s10: 'var(--ww-t-space-s10)',
		s12: 'var(--ww-t-space-s12)',
		s16: 'var(--ww-t-space-s16)',
		s20: 'var(--ww-t-space-s20)',
		s24: 'var(--ww-t-space-s24)',
		s28: 'var(--ww-t-space-s28)',
		s32: 'var(--ww-t-space-s32)',
		s36: 'var(--ww-t-space-s36)',
		s40: 'var(--ww-t-space-s40)',
		s64: 'var(--ww-t-space-s64)',
		s96: 'var(--ww-t-space-s96)'
	}
};
