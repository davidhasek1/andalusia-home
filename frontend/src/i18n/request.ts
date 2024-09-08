import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
	// Provide a static locale, fetch a user setting,
	// read from `cookies()`, `headers()`, etc.
	const locale = 'cs';
	const messages = await import(`../../messages/cs.json`);

	return {
		locale,
		messages: messages.default,
	};
});
