import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeader from './../../components/sectionHeader/SectionHeader';
import { TranslatedText } from './../../components/translatedText/TranslatedText';
import { LANGUAGES_LIST, TIME_FORMAT_TYPES } from './../../helpers/constants/settings';
import { T_Language, T_Settings, T_TimeFormat } from './../../helpers/types/settings';
import { updateSettingsParams } from './../../store/reducers/settings/actionCreators';
import {
	selectLanguage,
	selectTimeFormat,
	selectTranslateIntoSiteLanguage
} from './../../store/reducers/settings/selectors';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

type T_Props = {};

const Localize: FC<T_Props> = () => {
	const language = useSelector(selectLanguage);
	const translateIntoSiteLanguage = useSelector(selectTranslateIntoSiteLanguage);
	const timeFormat = useSelector(selectTimeFormat);
	const dispatch = useDispatch();

	const update = (params: Partial<T_Settings>) => {
		dispatch(updateSettingsParams(params));
	};

	return (
		<Box>
			<SectionHeader hideTopBorder>
				<TranslatedText>Localize</TranslatedText>
			</SectionHeader>
			<Stack
				spacing={2}
				padding={2}
			>
				<FormControlLabel
					control={
						<Switch
							checked={translateIntoSiteLanguage}
							onChange={(e) =>
								update({ translateIntoSiteLanguage: e.target.checked })
							}
						/>
					}
					label={<TranslatedText>Use site language</TranslatedText>}
					labelPlacement='start'
					sx={{ justifyContent: 'space-between', ml: 0 }}
				/>
				<Divider />
				<FormControlLabel
					control={
						<Autocomplete
							options={Object.keys(LANGUAGES_LIST)}
							value={language}
							disableClearable
							onChange={(_: any, newValue: string | null) =>
								update({ language: newValue as T_Language })
							}
							renderInput={(params) => (
								<TextField
									{...params}
									fullWidth
								/>
							)}
							disabled={translateIntoSiteLanguage}
							fullWidth
						/>
					}
					label={<TranslatedText>Language</TranslatedText>}
					labelPlacement='top'
					sx={{ alignItems: 'flex-start', ml: 0 }}
				/>

				<Divider />
				<FormControlLabel
					control={
						<ToggleButtonGroup
							value={timeFormat}
							exclusive
							onChange={(_: any, newTimeFormat: string | null) => {
								if (newTimeFormat === null) return;
								update({ timeFormat: newTimeFormat as T_TimeFormat });
							}}
							color='primary'
							fullWidth
							size='small'
						>
							<ToggleButton value={TIME_FORMAT_TYPES[0]}>
								<TranslatedText>AM/PM</TranslatedText>
							</ToggleButton>
							<ToggleButton value={TIME_FORMAT_TYPES[1]}>
								<TranslatedText>24H</TranslatedText>
							</ToggleButton>
						</ToggleButtonGroup>
					}
					label={<TranslatedText>Time format</TranslatedText>}
					labelPlacement='top'
					sx={{ alignItems: 'flex-start', ml: 0 }}
				/>
			</Stack>
		</Box>
	);
};

export { Localize };
