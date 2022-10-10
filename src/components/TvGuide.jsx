import { useContext, useState, useCallback } from 'react';
import AppContext from '@context/AppContext';
import '@styles/components/TvGuide.sass';
import Card from '../common/Card';

const TvGuide = ({ setIsOpen }) => {
	const [tvShow, setTvShow] = useState({});
	const { channels } = useContext(AppContext);

	const tvEvent = useCallback(item => {
		console.log('cb:', item);
		setTvShow(item);
	}, []);

	return (
		<div className='modal'>
			<div className='modal-content'>
				<button className='close-button' onClick={() => setIsOpen(false)}>
					<i className='fa-solid fa-xmark'></i>
				</button>
				{tvShow && Object.keys(tvShow).length > 0 && (
					<div className='infoEvent'>
						<h1 className='infoEvent__title'>
							Nombre del evento y/o Programa - {tvShow.name}
						</h1>
						<p className='infoEvent__time'>
							{tvShow.date_begin} a {tvShow.date_end} {tvShow.duration}
						</p>
						<p className='infoEvent__description'>
							Descripción del evento y/o Programa
						</p>
					</div>
				)}
				<div className='tvGuide'>
					<div className='option'>
						<button className='option__channel'>CANALES</button>
						<button className='option__categories'>CATEGORIAS</button>
						<button className='option__favorites'>FAVORITOS</button>
					</div>
					<div className='today'>
						<p className='today__label'>HOY</p>
					</div>
					<div className='epg'>
						<div className='epg_channels'>
							{channels.map(channel => (
								<div className='channel' key={channel.number}>
									<h2>{channel.number}</h2>
									<img src={channel.image} alt={channel.name} width={100} />
								</div>
							))}
						</div>
						<div className='epg_info'>
							{channels.map(channel => (
								<div className='row' key={channel.name}>
									{channel.events.map(item => (
										<Card item={item} tvEvent={tvEvent} key={item.unix_begin} />
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TvGuide;
