import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import { TranslatedText } from '../../components/translatedText/TranslatedText';
import { CHAT_POSITIONS, CHAT_VISIBILITY_ON_PAGES } from '../../helpers/constants/settings';
import { T_Settings } from '../../helpers/types/settings';
import { updateDisplaySettings } from '../../store/reducers/settings/actionCreators';
import { selectDisplaySettings } from '../../store/reducers/settings/selectors';
import {
	Box,
	Checkbox,
	Collapse,
	Divider,
	FormControlLabel,
	FormGroup,
	Radio,
	RadioGroup,
	ToggleButton,
	ToggleButtonGroup
} from '@mui/material';
import Stack from '@mui/material/Stack';

type T_Props = {};

const Display: FC<T_Props> = () => {
	const display = useSelector(selectDisplaySettings);
	const dispatch = useDispatch();

	window.Wix.getSiteInfo(console.log);

	return (
		<Box>
			<SectionHeader hideTopBorder>
				<TranslatedText>Chat position</TranslatedText>
			</SectionHeader>

			<Stack padding={2}>
				<ToggleButtonGroup
					value={display.position}
					onChange={(_, position) => dispatch(updateDisplaySettings({ position }))}
					exclusive
					fullWidth
				>
					<ToggleButton value={CHAT_POSITIONS[0]}>Bottom Left</ToggleButton>
					<ToggleButton value={CHAT_POSITIONS[1]}>Bottom Right</ToggleButton>
				</ToggleButtonGroup>
			</Stack>

			<SectionHeader>
				<TranslatedText>Chat Visibility</TranslatedText>
			</SectionHeader>

			<Stack
				padding={2}
				spacing={2}
			>
				<FormControlLabel
					control={
						<RadioGroup
							value={display.visibility.type}
							onChange={(_, type) =>
								dispatch(
									updateDisplaySettings({
										visibility: {
											...display.visibility,
											type: type as T_Settings['display']['visibility']['type']
										}
									})
								)
							}
						>
							<FormControlLabel
								value={CHAT_VISIBILITY_ON_PAGES[0]}
								control={<Radio />}
								label='On all pages'
							/>
							<FormControlLabel
								value={CHAT_VISIBILITY_ON_PAGES[1]}
								control={<Radio />}
								label='On selected pages'
							/>
						</RadioGroup>
					}
					label={<TranslatedText>When do visitors see the form?</TranslatedText>}
					labelPlacement='top'
					sx={{ alignItems: 'flex-start', mx: 0, mb: -1.1 }}
				/>

				<Collapse
					in={display.visibility.type === CHAT_VISIBILITY_ON_PAGES[1]}
					sx={{ pt: 0.1 }}
				>
					<Divider />
					<FormControlLabel
						control={
							<FormGroup>
								<FormControlLabel
									control={<Checkbox defaultChecked />}
									label='Label'
								/>
								<FormControlLabel
									control={<Checkbox />}
									label='Disabled'
								/>
							</FormGroup>
						}
						label={<TranslatedText>Select pages where to show chat.</TranslatedText>}
						labelPlacement='top'
						sx={{ alignItems: 'flex-start', mx: 0, mt: 2 }}
					/>
				</Collapse>
			</Stack>
		</Box>
	);
};

export { Display };
