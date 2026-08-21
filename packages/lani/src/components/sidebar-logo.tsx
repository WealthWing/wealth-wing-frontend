import { WWLogo } from 'components/ilustrations/ww-logo';
import { Link } from 'react-router-dom';

export const SidebarLogo = () => (
	<Link to="/" aria-label="Wealth Wing home">
		<WWLogo />
	</Link>
);
