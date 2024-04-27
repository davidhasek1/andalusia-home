'use client';

import { FormattedMessage } from 'react-intl';

const navLinks = [
	{
		name: <FormattedMessage id={'menu.properties'} />,
		href: '/properties',
	},
	{
		name: <FormattedMessage id={'menu.offer-property'} />,
		href: '/offer-property',
	},
	{
		name: <FormattedMessage id={'menu.our-team'} />,
		href: '/our-team',
	},
];

export { navLinks };
