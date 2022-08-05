import React, { FC } from 'react';
import { openDashboard } from '../../helpers/functions/commons';
import SecurityIllustration from './../../assets/images/security.png';
import { Box, Button, Stack, Typography } from '@mui/material';

type T_Props = {};

const Security: FC<T_Props> = () => {
	return (
		<Stack
			alignItems='center'
			padding='18px 24px'
			spacing={2}
		>
			<img
				src={SecurityIllustration}
				style={{ width: '76%' }}
			/>
			<Typography
				variant='body1'
				textAlign='center'
			>
				Manage your chat access, define authorization rules, and more.
			</Typography>

			<Box paddingTop={2}>
				<Button
					variant='contained'
					size='small'
					onClick={() => openDashboard({ urlParams: { page: 'messages' } })}
				>
					Manage Chat Security
				</Button>
			</Box>
		</Stack>
	);
};

export default Security;
