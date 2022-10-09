import '@styles/pages/Home.sass';
import { useState } from 'react';
import TvGuide from '../components/TvGuide';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='Home'>
			<div className='Video'>
				<button className='Video-btn' onClick={() => setIsOpen(true)}>
					<i className='fa-solid fa-tv'></i>
					Mostrar EPG
				</button>
			</div>
			{isOpen && <TvGuide setIsOpen={setIsOpen} />}
		</div>
	);
};

export default Home;
