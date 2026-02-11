import {
	formatDistance,
	fromUnixTime,
	intervalToDuration,
	isSameYear,
	isThisYear,
	isToday
} from 'date-fns';
import { format, toZonedTime } from 'date-fns-tz';

const dateFormatKeys = [
	'month-day-time',
	'month-day-year-short-time',
	'month-day-year',
	'month-day',
	'time-date',
	'time-month-year',
	'time-month',
	'time',
	'time-only',
	'time-only-seconds',
	'today-date',
	'today-time',
	'year',
	'month',
	'month-year'
] as const;

export type DateFormatTypes = (typeof dateFormatKeys)[number];

const dateFormats: Record<DateFormatTypes, string> = {
	'month-day-time': "MMM dd 'at' h:mma",
	'month-day-year-short-time': "MMM d, yyyy 'at' h:mm a",
	'month-day-year': 'MMM dd, yyyy',
	'month-day': 'MMM dd',
	'time-date': 'h:mma MMM d, yyyy',
	'time-month-year': "h:mm a 'on' MMM dd, yyyy",
	'time-month': "h:mm a 'on' MMM dd",
	'time-only-seconds': 'h:mm:ss a',
	'time-only': 'h:mm a',
	'today-date': "'Today'",
	'today-time': "'Today at' h:mm a",
	time: 'hh:mmaaa',
	year: 'yyyy',
	month: 'MMM',
	'month-year': 'MMM yyyy'
};

type TimestampOptions = {
	dateFormat?: DateFormatTypes;
	isLocalTime?: boolean;
};
/**
 *
 * @param timestamp Unix Timestamp
 * @returns formatted date string based on the user's local time zone
 */

export function formatTimestamp(timestamp: number, options?: TimestampOptions) {
	const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
	const dateFormat = dateFormats[options?.dateFormat ?? 'month-day'];

	return format(
		toZonedTime(fromUnixTime(timestamp), options?.isLocalTime ? timeZone : 'Etc/GMT'),
		dateFormat
	);
}

export function formatUtcDateTime(date: string, options?: TimestampOptions) {
	if (!date) return '-';
	const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
	const dateFormat = dateFormats[options?.dateFormat ?? 'month-day'];

	return format(toZonedTime(date, timeZone), dateFormat);
}

/**
 *
 * @param timestamp Unix Timestamp
 * @returns formatted relative date string based on the user's local time zone
 * @example 1 day ago | 2 days ago | about 1 year ago
 */

export function formatRelativeTime(timestamp: number) {
	const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

	return formatDistance(toZonedTime(fromUnixTime(timestamp), timeZone), new Date(), {
		addSuffix: true
	});
}

/**
 * Uses Intl.DateTimeFormat to get the timezone abbreviation, this is a native function in most browsers
 * @returns Timezone abbreviation (ex: 'PST')
 */
export function getTimezoneAbbreviation(): string {
	// If Intl is not supported, return an empty string
	if (typeof Intl === 'undefined') {
		return '';
	}

	// Get the current date
	const now = new Date();

	// Get the time zone abbreviation using Intl.DateTimeFormat
	const timezoneAbbreviation = (
		Intl.DateTimeFormat('en', { timeZoneName: 'short' })
			.formatToParts(now)
			.find((part) => part.type === 'timeZoneName') || { value: '' }
	).value;

	return timezoneAbbreviation;
}

export function getDateContext(timestamp: number) {
	const date = fromUnixTime(timestamp);

	const today = isToday(date);
	const currentYear = isThisYear(date);
	const previousYearOrEarlier = !isSameYear(date, new Date());

	return {
		isToday: today,
		isCurrentYear: currentYear,
		isPreviousYearOrEarlier: previousYearOrEarlier
	};
}

/**
 * Gets the duration between two timestamps
 * @param firstTimestamp First timestamp
 * @param lastTimestamp Last timestamp
 * @returns Object with hours, minutes, and seconds
 */
export const getDurationFromUnix = (firstTimestamp: number, lastTimestamp: number) => {
	const firstTimeFromUnix = fromUnixTime(firstTimestamp);
	const lastTimeFromUnix = fromUnixTime(lastTimestamp);

	const { hours, minutes, seconds } = intervalToDuration({
		start: firstTimeFromUnix,
		end: lastTimeFromUnix
	});

	return { hours: hours || 0, minutes: minutes || 0, seconds: seconds || 0 };
};

/**
 * Converts Date object to the unix format we're using to sync BE & FE
 */
export const dateToUnixFormat = (date: Date) => Math.floor(date.getTime() / 1000);

/**
 * Converts standardized unix format (between BE and FE) to Date object
 */
export const unixFormatToDate = (unix: number) => new Date(unix * 1000);
