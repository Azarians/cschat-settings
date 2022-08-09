import React, { FC } from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import { TranslatedText } from '../../components/translatedText/TranslatedText';
import { openReviewModal } from '../../helpers/functions/commons';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import { Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type T_Props = {};

const Support: FC<T_Props> = () => {
	return (
		<Stack
			justifyContent='space-between'
			height='100%'
		>
			<Stack>
				<SectionHeader hideTopBorder>
					<TranslatedText>Get Answers</TranslatedText>
				</SectionHeader>
				<List>
					<ListItem>
						<ListItemIcon>
							<MailOutlinedIcon color='primary' />
						</ListItemIcon>
						<ListItemText>
							<Link
								underline='hover'
								href={`mailto:${process.env.REACT_APP_SUPPORT_EMAIL}`}
							>
								<TranslatedText>Support E-mail</TranslatedText>
							</Link>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<LanguageOutlinedIcon color='primary' />
						</ListItemIcon>
						<ListItemText>
							<Link underline='hover'>
								<TranslatedText>Our Website</TranslatedText>
							</Link>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<RateReviewOutlinedIcon color='primary' />
						</ListItemIcon>
						<ListItemText>
							<Link underline='hover'>
								<TranslatedText>Send Us Feedback</TranslatedText>
							</Link>
						</ListItemText>
					</ListItem>
				</List>
			</Stack>
			<Stack
				alignItems='center'
				padding='18px'
				paddingBottom='30px'
			>
				<Box
					width='100%'
					marginBottom={2}
				>
					<Divider />
				</Box>
				<Typography
					variant='body2'
					textAlign='center'
				>
					<TranslatedText>
						Enjoying CSChat? Share your experience in the App Market.
					</TranslatedText>
				</Typography>
				<Box marginTop={2.5}>
					<Button
						size='small'
						variant='contained'
						onClick={openReviewModal}
					>
						<TranslatedText>Add a Review</TranslatedText>
					</Button>
				</Box>
			</Stack>
		</Stack>
	);
};

export { Support };
