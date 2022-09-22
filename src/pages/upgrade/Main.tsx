import React, { FC } from 'react';
import UpgradeImage from './../../assets/images/upgrade.webp';
import { TranslatedText } from './../../components/translatedText/TranslatedText';
import { openBillingPage } from './../../helpers/functions/commons';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type T_Props = {};

const Upgrade: FC<T_Props> = () => {
	return (
		<Stack
			direction='column'
			justifyContent='space-between'
			alignItems='center'
			spacing={3}
			height='100%'
			padding='30px 20px'
		>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
			>
				<img
					src={UpgradeImage}
					style={{ width: '70%', marginBottom: '26px' }}
				/>
				<Typography
					gutterBottom
					variant='h6'
				>
					<TranslatedText>Upgrade Your Plan</TranslatedText>
				</Typography>
				<Typography
					variant='body2'
					textAlign='center'
				>
					<TranslatedText>
						Upgrade your plan to access more functionality, have unlimited chat rooms
						and interlocutors, to use Tukse Chat's all strength and power.
					</TranslatedText>
				</Typography>
			</Box>

			<Box>
				<Button
					color='secondary'
					variant='contained'
					onClick={openBillingPage}
				>
					<TranslatedText>Upgrade Now</TranslatedText>
				</Button>
			</Box>
		</Stack>
	);
};

export { Upgrade };
