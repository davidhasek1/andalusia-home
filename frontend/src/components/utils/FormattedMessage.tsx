import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { getLocale } from 'next-intl/server';

export const FormattedMessage: FC<{ id: string }> = ({ id }) => {
	const t = useTranslations();

	return <>{t(id)}</>;
};
