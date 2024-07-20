'use client';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { IntlProvider, MessageFormatElement } from 'react-intl';

const loadLocales = (locale: string) => {
	return import('./cs.json');
};

export const LocalesContext: FC<PropsWithChildren> = ({ children }) => {
	const [messages, setMessages] = useState<Record<string, string> | Record<string, MessageFormatElement[]>>();

	useEffect(() => {
		loadLocales('en').then((d: { default: Record<string, string> | Record<string, MessageFormatElement[]> | undefined }) => {
			setMessages(d.default);
		});
	}, []);
	return (
		/* It takes a while to load locals and console show MISSING TRANSLATION. prop onError IntlProvider turns that off like this onError={() => null} */
		<IntlProvider messages={messages} locale={'cs'} defaultLocale={'en'} onError={() => null}>
			{children}
		</IntlProvider>
	);
};
