import { main } from './containers.styles';

export const Main = ({ children }: { children: React.ReactNode }) => (
	<main css={main}>
		{children}
		<div style={{ padding: '3rem' }} />
	</main>
);
