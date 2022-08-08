import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeader from './../../../components/sectionHeader/SectionHeader';
import { TranslatedText } from './../../../components/translatedText/TranslatedText';
import { AUTHORIZATION_FIELDS } from './../../../helpers/constants/settings';
import { T_AuthorizationField } from './../../../helpers/types/settings';
import { updateSettingsParams } from './../../../store/reducers/settings/actionCreators';
import { selectAuthorization } from './../../../store/reducers/settings/selectors';
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

	const updateField = (currentFiled: T_AuthorizationField) => {
		dispatch(
			updateSettingsParams({
				authorization: {
					...authorization,
					fields: {
						...authorization.fields,
						[currentFiled.name]: currentFiled
					}
				}
			})
		);
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
							onChange={(e) =>
								dispatch(
									updateSettingsParams({
										authorization: {
											...authorization,
											enabled: e.target.checked
										}
									})
								)
							}
						/>
					}
					label={<TranslatedText>Require authorization</TranslatedText>}
					labelPlacement='start'
					sx={{ justifyContent: 'space-between', ml: 0, width: 'calc(100% + 11px)' }}
				/>
				<Collapse
					in={authorization.enabled}
					sx={{ width: 'calc(100% + 11px)' }}
					timeout='auto'
				>
					<Stack
						marginTop={2}
						spacing={2}
					>
						<Divider />
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
										margin='0 0 -8px 12px'
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
									/>
								</Stack>
							);
						})}
					</Stack>
				</Collapse>
			</Stack>
		</Box>
	);
};

export { AuthorizationRules };
