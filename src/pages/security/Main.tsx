import React, { FC } from 'react';
import { TranslatedText } from '../../components/translatedText/TranslatedText';
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
				<TranslatedText>
					Manage your chat access, define authorization rules, and more.
				</TranslatedText>
			</Typography>

			<Box paddingTop={2}>
				<Button
					variant='contained'
					size='small'
					onClick={() => openDashboard({ urlParams: { page: 'messages' } })}
				>
					<TranslatedText>Manage Chat Security</TranslatedText>
				</Button>
			</Box>
		</Stack>
	);
};

export { Security };
