import { format } from 'date-fns';

export function formatTimeFromDateTime(date, isDescription = false) {
	const formatedDate = format(new Date(date), 'HH:mm');
	return isDescription ? `${formatedDate.replace(':', '.')} hs` : formatedDate;
}
