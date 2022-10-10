import { formatTimeFromDateTime } from '@utils';
import { memo } from 'react';

export default memo(function Card({ item, tvEvent }) {
	return (
		<div
			className='show s30'
			onMouseEnter={e => {
				console.log('Event:MouseEnter');
				e.stopPropagation();
				e.preventDefault();
				tvEvent(item);
			}}
			onMouseLeave={e => {
				console.log('Event:MouseLeave');
				e.stopPropagation();
				e.preventDefault();
				tvEvent({});
			}}
		>
			<h3>{item.name}</h3>
			<p>
				{formatTimeFromDateTime(item.date_begin)} -
				{formatTimeFromDateTime(item.date_end)}
			</p>
			<i className='fa-regular fa-circle-ellipsis'></i>
		</div>
	);
});
