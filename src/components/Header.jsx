import { Link } from 'react-router-dom';
import '@styles/components/Header.sass';
import ClaroVideo from '@assets/clarovideo-logo.svg';

const Header = () => {
	return (
		<div className='Header'>
			<Link to='/'>
				<img src={ClaroVideo} alt='Claro Video' width={90} />
			</Link>
		</div>
	);
};

export default Header;
