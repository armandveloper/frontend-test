import { months } from '../constants';

export const formatTimestamp = (timestamp = new Date()) => {
	const hour24 = timestamp.getHours(),
		hour = hour24 - 12,
		minutes = timestamp.getMinutes(),
		day = timestamp.getDate(),
		month = timestamp.getMonth(),
		year = timestamp.getFullYear();

	return `${hour < 10 ? '0' + hour : hour}: ${
		minutes < 10 ? '0' + minutes : minutes
	} ${hour24 < 12 ? 'AM' : 'PM'}, ${months[month]} ${day} ${year} `;
};
