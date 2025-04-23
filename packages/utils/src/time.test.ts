import { describe, expect, test } from 'vitest';

import { dateToUnixFormat, getDurationFromUnix, unixFormatToDate } from './time';

// TODO: tests for getTimezoneAbbreviation();

describe('getDurationFromUnix', () => {
	test('should equal 0h, 0m, 0s', () => {
		expect(getDurationFromUnix(1716404328, 1716404328)).toEqual({
			hours: 0,
			minutes: 0,
			seconds: 0
		});
	});
	test('should equal 0h, 0m, 1s', () => {
		expect(getDurationFromUnix(1716404572, 1716404573)).toEqual({
			hours: 0,
			minutes: 0,
			seconds: 1
		});
	});
	test('should equal 0h, 4m, 38s', () => {
		expect(getDurationFromUnix(1716404328, 1716404606)).toEqual({
			hours: 0,
			minutes: 4,
			seconds: 38
		});
	});
	test('should equal -2h, -42m, -2s', () => {
		expect(getDurationFromUnix(1716414328, 1716404606)).toEqual({
			hours: -2,
			minutes: -42,
			seconds: -2
		});
	});
	test('should equal 2h, 42m, 2s despite flipping timestamps', () => {
		expect(getDurationFromUnix(1716404606, 1716414328)).toEqual({
			hours: 2,
			minutes: 42,
			seconds: 2
		});
	});
});

describe('dateToUnixFormat', () => {
	test('should be 1714968000', () => {
		expect(
			dateToUnixFormat(new Date('Mon May 06 2024 00:00:00 GMT-0400 (Eastern Daylight Time)'))
		).toBe(1714968000);
	});
	test('should be 1717128000', () => {
		expect(
			dateToUnixFormat(new Date('Fri May 31 2024 00:00:00 GMT-0400 (Eastern Daylight Time)'))
		).toBe(1717128000);
	});
	test('should be NaN', () => {
		expect(
			dateToUnixFormat(
				new Date('Fri May 31 272821000 00:00:00 GMT-0400 (Eastern Daylight Time)')
			)
		).toBeNaN();
	});
	test('should be typeof number', () => {
		expect(typeof dateToUnixFormat(new Date())).toBe('number');
	});
});

describe('unixFormatToDate', () => {
	test('should equal 2024-05-06T04:00:00.000Z', () => {
		expect(unixFormatToDate(1714968000)).toEqual(new Date('2024-05-06T04:00:00.000Z'));
	});
	test('should equal 2024-05-31T04:00:00.000Z', () => {
		expect(unixFormatToDate(1717128000)).toEqual(new Date('2024-05-31T04:00:00.000Z'));
	});
	test('should equal 1970-01-01T00:00:00.000Z', () => {
		expect(unixFormatToDate(0)).toEqual(new Date('1970-01-01T00:00:00.000Z'));
	});
	test('should equal 1969-12-31T23:59:59.000Z', () => {
		expect(unixFormatToDate(-1)).toEqual(new Date('1969-12-31T23:59:59.000Z'));
	});
	test('should be NaN', () => {
		expect(unixFormatToDate(1000000000000000000000).getDate()).toBeNaN();
	});
	test('should be instanceOf Date', () => {
		expect(unixFormatToDate(1714968000)).toBeInstanceOf(Date);
	});
});
