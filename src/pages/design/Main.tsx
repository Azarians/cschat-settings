import React, { FC } from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import { SectionNavigator } from '../../components/sectionNavigator/SectionNavigator';
import { TranslatedText } from '../../components/translatedText/TranslatedText';
import { APP_PATHS } from '../../helpers/constants/commons';
import Stack from '@mui/material/Stack';

type T_Props = {};

const Design: FC<T_Props> = () => {
	return (
		<Stack>
			<SectionHeader hideTopBorder>
				<TranslatedText>Chat Design</TranslatedText>
			</SectionHeader>
			<SectionNavigator
				hideTopBorder
				to={APP_PATHS.design.container}
			>
				<TranslatedText>Container</TranslatedText>
			</SectionNavigator>
			<SectionNavigator
				hideTopBorder
				to={APP_PATHS.design.header}
			>
				<TranslatedText>Header</TranslatedText>
			</SectionNavigator>
			<SectionNavigator
				hideTopBorder
				to={APP_PATHS.design.messages}
			>
				<TranslatedText>Messages</TranslatedText>
			</SectionNavigator>
			<SectionNavigator
				hideTopBorder
				to={APP_PATHS.design.minimizedChat}
			>
				<TranslatedText>Minimized CHat</TranslatedText>
			</SectionNavigator>
		</Stack>
	);
};

export { Design };
