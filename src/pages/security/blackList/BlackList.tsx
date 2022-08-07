import React, { FC } from 'react';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';
import { TranslatedText } from '../../../components/translatedText/TranslatedText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from '@mui/material';

type T_Props = {};

const BlackList: FC<T_Props> = () => {
	return (
		<Box>
			<SectionHeader
				hideTopBorder
				showBackButton
			>
				<TranslatedText>Black List</TranslatedText>
			</SectionHeader>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>
						<TranslatedText>Emails List</TranslatedText>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>
						<TranslatedText>Countries List</TranslatedText>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>
						<TranslatedText>IPs List</TranslatedText>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};

export { BlackList };
