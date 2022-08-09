import React, { FC } from 'react';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';
import { TranslatedText } from '../../../components/translatedText/TranslatedText';
import { BLACK_LIST_SECTIONS } from '../../../helpers/constants/settings';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
	Box,
	Theme
} from '@mui/material';

type T_Props = {};

const accordionStyles = {
	'border-bottom': (theme: Theme) => `1px solid ${theme.palette.divider}`,
	'.MuiPaper-root:not(.Mui-expanded) &': {
		'border-bottom-color': 'transparent',
		'transition': 'border-bottom-color 0.3s'
	},
	':before': { display: 'none' },
	'boxShadow': 'unset'
};

const BlackList: FC<T_Props> = () => {
	const [expanded, setExpanded] = React.useState<number | null>(null);

	return (
		<Box>
			<SectionHeader
				hideTopBorder
				showBackButton
			>
				<TranslatedText>Black List</TranslatedText>
			</SectionHeader>
			{BLACK_LIST_SECTIONS.map(({ id, label, Content }) => (
				<Accordion
					sx={accordionStyles}
					disableGutters
					expanded={expanded === id}
					onChange={() => setExpanded(expanded === id ? null : id)}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon color='primary' />}
						sx={accordionStyles}
					>
						<Typography>
							<TranslatedText>{label}</TranslatedText>
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Content />
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	);
};

export { BlackList };
