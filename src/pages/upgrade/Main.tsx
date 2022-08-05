import React, { FC } from 'react';
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
				<Typography>Upgrade Your Plan</Typography>
			</Box>

			<Box>
				<Button
					color='secondary'
					variant='contained'
					onClick={openBillingPage}
					size='small'
				>
					Upgrade Now
				</Button>
			</Box>
		</Stack>
	);
};

export { Upgrade };
