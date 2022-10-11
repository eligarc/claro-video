import { memo } from 'react';
import { formatTimeFromDateTime } from '@utils';
import '@styles/components/Card.sass';

export default memo(function Card({ item, tvEvent }) {
	return (
		<div
			className='show s30'
			onMouseEnter={e => {
				e.stopPropagation();
				e.preventDefault();
				tvEvent(item);
			}}
			onMouseLeave={e => {
				e.stopPropagation();
				e.preventDefault();
				tvEvent({});
			}}
		>
			<div className='show__names'>
				<p className='name'>{item.name}</p>
				<small>
					{formatTimeFromDateTime(item.date_begin)} -{' '}
					{formatTimeFromDateTime(item.date_end)}
				</small>
			</div>
			<div className='show__option'>
				<i className='fa-regular fa-circle-ellipsis'></i>
			</div>
		</div>
	);
});
