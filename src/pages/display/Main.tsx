import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import { TranslatedText } from '../../components/translatedText/TranslatedText';
import { SITE_MAP } from '../../helpers/constants/commons';
import { CHAT_POSITIONS, CHAT_VISIBILITY_ON_PAGES } from '../../helpers/constants/settings';
import { T_SitePage } from '../../helpers/types/commons';
import { T_Settings } from '../../helpers/types/settings';
import { updateDisplaySettings } from '../../store/reducers/settings/actionCreators';
import {
	selectDisplaySettings,
	selectSelectedPageIds
} from '../../store/reducers/settings/selectors';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
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
	const { position, visibility } = useSelector(selectDisplaySettings);
	const selectedPageIds = useSelector(selectSelectedPageIds);
	const dispatch = useDispatch();

	const updateSelectedPages = (event: React.ChangeEvent<HTMLInputElement>, page: T_SitePage) => {
		dispatch(
			updateDisplaySettings({
				visibility: {
					...visibility,
					selectedPages: event.target.checked
						? [
								...visibility.selectedPages,
								{
									id: page.pageId,
									title: page.title
								}
						  ]
						: visibility.selectedPages.filter(
								(selectedPage) => selectedPage.id !== page.pageId
						  )
				}
			})
		);
	};

	return (
		<Box>
			<SectionHeader hideTopBorder>
				<TranslatedText>Chat position</TranslatedText>
			</SectionHeader>

			<Stack padding={2}>
				<FormControlLabel
					control={
						<ToggleButtonGroup
							value={position}
							onChange={(_, position) => {
								if (position === null) return;
								dispatch(updateDisplaySettings({ position }));
							}}
							exclusive
							fullWidth
							sx={{ mt: 0.8 }}
						>
							<ToggleButton value={CHAT_POSITIONS[0]}>Bottom Left</ToggleButton>
							<ToggleButton value={CHAT_POSITIONS[1]}>Bottom Right</ToggleButton>
						</ToggleButtonGroup>
					}
					label='Choose chat position on the page.'
					labelPlacement='top'
					sx={{ alignItems: 'flex-start', mx: 0 }}
				/>
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
							value={visibility.type}
							onChange={(_, type) =>
								dispatch(
									updateDisplaySettings({
										visibility: {
											...visibility,
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
					in={visibility.type === CHAT_VISIBILITY_ON_PAGES[1]}
					sx={{ pt: 0.1 }}
				>
					<Divider />
					<FormControlLabel
						control={
							<FormGroup>
								{SITE_MAP.map((page) => (
									<>
										<FormControlLabel
											key={page.pageId}
											control={
												<Checkbox
													checked={selectedPageIds.includes(page.pageId)}
													onChange={(e) => updateSelectedPages(e, page)}
												/>
											}
											label={page.title}
										/>
										{page.subPages?.map((subPage) => (
											<Box
												alignItems='center'
												display='flex'
												key={subPage.pageId}
											>
												<SubdirectoryArrowLeftIcon
													sx={{ transform: 'rotate(90deg)', mt: -3.5 }}
													color='action'
												/>
												<FormControlLabel
													control={
														<Checkbox
															checked={selectedPageIds.includes(
																subPage.pageId
															)}
															onChange={(e) =>
																updateSelectedPages(e, subPage)
															}
														/>
													}
													label={subPage.title}
													sx={{ ml: -0.5 }}
												/>
											</Box>
										))}
									</>
								))}
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
