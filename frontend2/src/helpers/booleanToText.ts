import { IntlShape } from 'react-intl';

const booleanToText = (intl: IntlShape, value?: number) =>
	value ? intl.formatMessage({ id: 'common.yes' }) : intl.formatMessage({ id: 'common.no' });

export { booleanToText };
