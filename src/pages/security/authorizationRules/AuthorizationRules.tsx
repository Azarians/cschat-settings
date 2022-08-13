import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeader from './../../../components/sectionHeader/SectionHeader';
import { TranslatedText } from './../../../components/translatedText/TranslatedText';
import {
	AUTHORIZATION_FIELDS,
	SHOW_AUTHORIZATION_FORM_OPTIONS
} from './../../../helpers/constants/settings';
import { T_Authorization, T_AuthorizationField } from './../../../helpers/types/settings';
import { updateAuthorization } from './../../../store/reducers/settings/actionCreators';
import { selectAuthorization } from './../../../store/reducers/settings/selectors';
import { Radio, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

type T_Props = {};

const AuthorizationRules: FC<T_Props> = () => {
	const authorization = useSelector(selectAuthorization);
	const dispatch = useDispatch();

	const updateAuthRules = (params: Partial<T_Authorization>) =>
		dispatch(updateAuthorization(params));

	const updateField = (currentFiled: T_AuthorizationField) => {
		updateAuthRules({
			fields: {
				...authorization.fields,
				[currentFiled.name]: currentFiled
			}
		});
	};

	return (
		<Box>
			<SectionHeader
				hideTopBorder
				showBackButton
			>
				<TranslatedText>Authorization Rules</TranslatedText>
			</SectionHeader>
			<Stack padding={2}>
				<FormControlLabel
					control={
						<Switch
							checked={authorization.enabled}
							onChange={(e) => updateAuthRules({ enabled: e.target.checked })}
						/>
					}
					label={<TranslatedText>Require authorization</TranslatedText>}
					labelPlacement='start'
					sx={{ justifyContent: 'space-between', ml: 0, width: 'calc(100% + 8px)' }}
				/>
				<Collapse
					in={authorization.enabled}
					sx={{ width: 'calc(100% + 4px)' }}
					timeout='auto'
				>
					<Stack
						spacing={2}
						pt={2}
						pb={1}
					>
						{AUTHORIZATION_FIELDS.map((field) => {
							const currentFiled = authorization.fields[field.name];

							return (
								<Stack
									direction='row'
									alignItems='center'
									key={field.id}
								>
									<TextField
										label={<TranslatedText>{field.label}</TranslatedText>}
										variant='outlined'
										size='small'
										fullWidth
										disabled={!currentFiled.enabled}
									/>
									<Box
										onClick={() => {
											if (!currentFiled.enabled) return;
											updateField({
												...currentFiled,
												required: !currentFiled.required
											});
										}}
										margin='0 4px -8px 12px'
										sx={{ cursor: 'pointer' }}
									>
										<Tooltip
											title={
												currentFiled.required
													? 'Make optional'
													: 'Make required'
											}
											placement='top'
											disableHoverListener={!currentFiled.enabled}
										>
											<Typography
												variant='h5'
												sx={{
													color:
														currentFiled.required &&
														currentFiled.enabled
															? '#D0180B!important'
															: undefined
												}}
											>
												*
											</Typography>
										</Tooltip>
									</Box>
									<Switch
										checked={currentFiled.enabled}
										onChange={(e) =>
											updateField({
												...currentFiled,
												enabled: e.target.checked
											})
										}
										size='small'
									/>
								</Stack>
							);
						})}
					</Stack>
				</Collapse>
				<Divider sx={{ mt: 1, mb: 2 }} />
				<FormControlLabel
					control={
						<RadioGroup
							value={authorization.showForm}
							onChange={(e) =>
								updateAuthRules({
									showForm: e.target.value as T_Authorization['showForm']
								})
							}
						>
							<FormControlLabel
								value={SHOW_AUTHORIZATION_FORM_OPTIONS[0]}
								control={<Radio />}
								label='Once they open the chat'
							/>
							<FormControlLabel
								value={SHOW_AUTHORIZATION_FORM_OPTIONS[1]}
								control={<Radio />}
								label='After they send a message'
							/>
						</RadioGroup>
					}
					label={<TranslatedText>When do visitors see the form?</TranslatedText>}
					labelPlacement='top'
					sx={{ alignItems: 'flex-start', mx: 0 }}
				/>
			</Stack>
		</Box>
	);
};

export { AuthorizationRules };
