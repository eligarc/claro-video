import { useContext, useState, useCallback, useRef } from 'react';
import AppContext from '@context/AppContext';
import Card from '../common/Card';
import { formatTimeFromDateTime } from '@utils';
import '@styles/components/TvGuide.sass';

const TvGuide = ({ setIsOpen }) => {
	const [tvShow, setTvShow] = useState({});
	const { channels } = useContext(AppContext);
	const epgInfo = useRef(null);

	const scroll = scrollOffset => {
		epgInfo.current.scrollLeft += scrollOffset;
	};
	const tvEvent = useCallback(item => {
		setTvShow(item);
	}, []);

	return (
		<div className='modal'>
			<div className='modal-content'>
				<button className='close-button' onClick={() => setIsOpen(false)}>
					<i className='fa-solid fa-xmark'></i>
				</button>
				{tvShow && Object.keys(tvShow).length > 0 && (
					<div className='containerInfo'>
						<div className='infoEvent'>
							<h1 className='infoEvent__title'>{tvShow.name}</h1>
							<p className='infoEvent__time'>
								{formatTimeFromDateTime(tvShow.date_begin, true)} a{' '}
								{formatTimeFromDateTime(tvShow.date_end, true)}{' '}
								{tvShow.duration.split(':')[0]}hs{' '}
								{tvShow.duration.split(':')[1]}
								min
							</p>
							<p className='infoEvent__description'>{tvShow.description}</p>
						</div>
					</div>
				)}
				<div className='tvGuide'>
					<div className='option'>
						<button className='option__channel'>CANALES</button>
						<button className='option__categories'>CATEGORIAS</button>
						<button className='option__favorites'>FAVORITOS</button>
					</div>
					<div className='today'>
						<div className='today__label'>HOY</div>
						<div className='today__date'></div>
						<div className='today__arrow'>
							<button onClick={() => scroll(-300)}>
								<i className='fa-solid fa-circle-arrow-left'></i>
							</button>
							<button onClick={() => scroll(300)}>
								<i className='fa-solid fa-circle-arrow-right'></i>
							</button>
						</div>
					</div>
					<div className='epg'>
						<div className='epg__channels'>
							{channels.map(channel => (
								<div className='channel' key={channel.number}>
									<h2>{channel.number}</h2>
									<img src={channel.image} alt={channel.name} width={100} />
								</div>
							))}
						</div>
						<div className='epg__info' ref={epgInfo}>
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
