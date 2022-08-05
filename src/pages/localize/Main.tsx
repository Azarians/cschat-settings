import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
// import { SITE_LANGUAGE } from '../../helpers/constants/commons';
import { LANGUAGES_LIST, TIME_FORMAT_TYPES } from '../../helpers/constants/settings';
import { T_Language, T_Settings, T_TimeFormat } from '../../helpers/types/settings';
import { updateSettingsParams } from '../../store/reducers/settings/actionCreators';
import {
	selectLanguage,
	selectTimeFormat,
	selectTranslateIntoSiteLanguage
} from '../../store/reducers/settings/selectors';
import {
	Autocomplete,
	Divider,
	FormControlLabel,
	Stack,
	Switch,
	TextField,
	ToggleButton,
	ToggleButtonGroup
} from '@mui/material';
import { Box } from '@mui/system';

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
			<SectionHeader hideTopBorder>Localize</SectionHeader>
			<Stack
				spacing={2}
				padding={2}
				paddingTop={2.4}
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
					label='Use site language'
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
							size='small'
							disabled={translateIntoSiteLanguage}
							fullWidth
						/>
					}
					label='Language'
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
							aria-label='text alignment'
							color='primary'
							fullWidth
							size='small'
						>
							<ToggleButton value={TIME_FORMAT_TYPES[0]}>AM/PM</ToggleButton>
							<ToggleButton value={TIME_FORMAT_TYPES[1]}>24H</ToggleButton>
						</ToggleButtonGroup>
					}
					label='Time format'
					labelPlacement='top'
					sx={{ alignItems: 'flex-start', ml: 0 }}
				/>
			</Stack>
		</Box>
	);
};

export { Localize };
