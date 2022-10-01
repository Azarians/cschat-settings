import React, { FC } from 'react';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';
import { SectionNavigator } from '../../../components/sectionNavigator/SectionNavigator';
import { TranslatedText } from '../../../components/translatedText/TranslatedText';
import { APP_PATHS } from '../../../helpers/constants/commons';
import Stack from '@mui/material/Stack';

type T_Props = {};

const Security: FC<T_Props> = () => {
	return (
		<Stack>
			<SectionHeader hideTopBorder>
				<TranslatedText>Chat Security</TranslatedText>
			</SectionHeader>
			<SectionNavigator
				hideTopBorder
				to={APP_PATHS.security.authorizationRules}
			>
				<TranslatedText>Authorization Rules</TranslatedText>
			</SectionNavigator>
			<SectionNavigator
				hideTopBorder
				to={APP_PATHS.security.blackList}
			>
				<TranslatedText>Black List</TranslatedText>
			</SectionNavigator>
		</Stack>
	);
};

export { Security };
