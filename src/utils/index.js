export function formatTimeFromDateTime(date) {
	return new Date(date).toLocaleTimeString('en-US', {
		hour12: false,
		hour: 'numeric',
		minute: 'numeric',
	});
}
