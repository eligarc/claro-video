import { useEffect } from 'react';
import '@styles/components/TvGuide.sass';

const TvGuide = ({ setIsOpen }) => {
	useEffect(() => {}, []);
	return (
		<div className='modal'>
			<div className='modal-content'>
				<button className='close-button' onClick={() => setIsOpen(false)}>
					<i className='fa-solid fa-xmark'></i>
				</button>
				<h1>Hello, I am a modal!</h1>
			</div>
		</div>
	);
};

export default TvGuide;
