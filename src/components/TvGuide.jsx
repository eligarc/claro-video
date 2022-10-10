import { useContext, useEffect } from 'react';
import AppContext from '@context/AppContext';
import '@styles/components/TvGuide.sass';
import { formatTimeFromDateTime } from '@utils';

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
				<div className='tv-guide'>
					<div className='option'>
						<button className='option__channel'>CANALES</button>
						<button className='option__categories'>CATEGORIAS</button>
						<button className='option__favorites'>FAVORITOS</button>
					</div>
					<div className='header2'>HOY</div>
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
									{channel.events.map(event => (
										<div className='show s30' key={event.date_begin}>
											<h3>{event.name}</h3>
											<p>
												{formatTimeFromDateTime(event.date_begin)} -
												{formatTimeFromDateTime(event.date_end)}
											</p>
											<i className='fa-regular fa-circle-ellipsis'></i>
										</div>
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
