import { describe, expect, test } from 'vitest';

import { formatEmail, formatUrl } from './string';

describe('formatUrl', () => {
	test('should return null if url is undefined', () => {
		expect(formatUrl(undefined)).toBeNull();
	});

	test('should return null if url is an empty string', () => {
		expect(formatUrl('')).toBeNull();
	});

	test('should return domain name from a URL with http protocol', () => {
		expect(formatUrl('http://example.com')).toBe('example.com');
	});

	test('should return domain name from a URL with https protocol', () => {
		expect(formatUrl('https://example.com')).toBe('example.com');
	});

	test('should return domain name from a URL with www prefix', () => {
		expect(formatUrl('www.example.com')).toBe('example.com');
	});

	test('should return domain name from a URL with https and www prefix', () => {
		expect(formatUrl('https://www.example.com')).toBe('example.com');
	});

	test('should return domain name from a URL with query parameters', () => {
		expect(formatUrl('https://www.example.com?query=123')).toBe('example.com');
	});
});

describe('formatEmail', () => {
	test('should return masked email', () => {
		expect(formatEmail('john.doe@example.com')).toBe('j*******@e**********');
	});

	test('should return "Invalid email" if email does not contain "@"', () => {
		expect(formatEmail('johndoe')).toBe('Invalid email');
	});

	test('should handle email with missing local part', () => {
		expect(formatEmail('@example.com')).toBe('Invalid email');
	});

	test('should handle email with missing domain part', () => {
		expect(formatEmail('john.doe@')).toBe('Invalid email');
	});
});
