import React, { FC } from 'react';
import { TranslatedText } from '../../components/translatedText/TranslatedText';
import { openBillingPage } from '../../helpers/functions/commons';
import UpgradeImage from './../../assets/images/upgrade.webp';
import { Box, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';

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
