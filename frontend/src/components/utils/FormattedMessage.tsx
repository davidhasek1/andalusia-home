import { FC } from 'react';
import { TranslationValues, useTranslations } from 'next-intl';

export const FormattedMessage: FC<{ id: string; values?: TranslationValues }> = ({ id, values }) => {
	const t = useTranslations();

	return <>{t(id, values)}</>;
};
