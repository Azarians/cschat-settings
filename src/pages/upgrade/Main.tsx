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
					style={{ width: '70%', marginBottom: '20px' }}
				/>
				<Typography>
					<TranslatedText>Upgrade Your Plan</TranslatedText>
				</Typography>
			</Box>

			<Box>
				<Button
					color='secondary'
					variant='contained'
					onClick={openBillingPage}
					size='small'
				>
					<TranslatedText>Upgrade Now</TranslatedText>
				</Button>
			</Box>
		</Stack>
	);
};

export { Upgrade };
