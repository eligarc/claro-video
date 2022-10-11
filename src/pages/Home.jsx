import { useState } from 'react';
import TvGuide from '../components/TvGuide';
import '@styles/pages/Home.sass';

const Home = () => {
	const [isOpen, setIsOpen] = useState(true);
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
