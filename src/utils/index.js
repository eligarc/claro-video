import { format } from 'date-fns';

export function formatTimeFromDateTime(date, isDescription = false) {
	const formatedDate = format(new Date(date), 'HH:mm');
	return isDescription ? `${formatedDate.replace(':', '.')} hs` : formatedDate;
}

export function rangeNumbers(start, stop, step) {
	start = start / 1;
	const a = [start];
	let b = start;
	while (b < stop / 1) {
		a.push((b += step / 1 || 1));
	}
	return a;
}
