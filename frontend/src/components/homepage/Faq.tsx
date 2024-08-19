'use client';
import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { SectionCounter } from './SectionCounter';
import { CommonProps } from './types';
import theme from '../../theme';

const faqs = [
	{
		id: 1,
		title: <FormattedMessage id={'homepage.faq.title1'} />,
		content: <FormattedMessage id={'homepage.faq.content1'} />,
	},
	{
		id: 2,
		title: <FormattedMessage id={'homepage.faq.title2'} />,
		content: <FormattedMessage id={'homepage.faq.content2'} />,
	},
	{
		id: 3,
		title: <FormattedMessage id={'homepage.faq.title3'} />,
		content: <FormattedMessage id={'homepage.faq.content3'} />,
	},
];

type Props = CommonProps;

export const Faq: FC<Props> = ({ order }) => {
	return (
		<Stack gap={2}>
			<SectionCounter value={order} />
			<Typography variant={'h2'}>
				<FormattedMessage id={'homepage.section.faqs.title'} />
			</Typography>

			<Stack gap={2} width={{ xl: '65%', lg: '80%', xs: '100%' }} margin={'auto'}>
				{faqs.map((faq, i) => (
					<Accordion
						key={faq.id}
						defaultExpanded={i === 0}
						sx={{ '&.MuiAccordion-root': { boxShadow: 'none', border: `1px solid ${theme.palette.grey[300]}` } }}
					>
						<AccordionSummary expandIcon={<ExpandMore />} aria-controls={'panel1-content'} id={'panel1-header'}>
							<Typography variant={'h5'}>{faq.title}</Typography>
						</AccordionSummary>
						<AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
							<Typography variant={'caption'} fontSize={16}>
								{faq.content}
							</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</Stack>
		</Stack>
	);
};
