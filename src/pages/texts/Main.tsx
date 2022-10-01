import React, { FC } from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import { TranslatedText } from '../../components/translatedText/TranslatedText';
import { Box, FormControlLabel, Stack, TextField } from '@mui/material';

type T_Props = {};

const Texts: FC<T_Props> = () => {
	return (
		<Box>
			<SectionHeader hideTopBorder>
				<TranslatedText>Chat Opened State</TranslatedText>
			</SectionHeader>

			<Stack
				padding={2}
				spacing={2}
			>
				<FormControlLabel
					control={
						<TextField
							variant='outlined'
							placeholder='Bussiness or website name'
							fullWidth
						/>
					}
					label={<TranslatedText>Name</TranslatedText>}
					labelPlacement='top'
					sx={{ alignItems: 'flex-start', mx: 0 }}
				/>
			</Stack>

			<SectionHeader>
				<TranslatedText>Offline Message</TranslatedText>
			</SectionHeader>

			<Stack
				padding={2}
				spacing={2}
			>
				<FormControlLabel
					control={
						<TextField
							variant='outlined'
							fullWidth
							multiline
							rows={2}
						/>
					}
					label={<TranslatedText>Message</TranslatedText>}
					labelPlacement='top'
					sx={{ alignItems: 'flex-start', mx: 0 }}
				/>
			</Stack>
		</Box>
	);
};

export { Texts };
