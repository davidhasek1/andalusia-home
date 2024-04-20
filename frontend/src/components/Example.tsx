'use client';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

export const Example: FC = () => {
	return (
		<div>
			<FormattedMessage id="test" />
			<br />
			<FormattedMessage id="test2" />
		</div>
	);
};
