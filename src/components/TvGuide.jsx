import { useContext, useEffect } from 'react';
import AppContext from '@context/AppContext';
import '@styles/components/TvGuide.sass';

const TvGuide = ({ setIsOpen }) => {
	const { channels } = useContext(AppContext);
	useEffect(() => {
		console.log(channels);
	}, []);
	return (
		<div className='modal'>
			<div className='modal-content'>
				<button className='close-button' onClick={() => setIsOpen(false)}>
					<i className='fa-solid fa-xmark'></i>
				</button>
				<h1>Canales de televisión</h1>
			</div>
		</div>
	);
};

export default TvGuide;
