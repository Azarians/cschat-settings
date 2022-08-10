import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
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
			<NavLink to={APP_PATHS.authorizationRules}>
				<SectionNavigator hideTopBorder>
					<TranslatedText>Authorization Rules</TranslatedText>
				</SectionNavigator>
			</NavLink>
			<NavLink to={APP_PATHS.blackList}>
				<SectionNavigator hideTopBorder>
					<TranslatedText>Black List</TranslatedText>
				</SectionNavigator>
			</NavLink>
		</Stack>
	);
};

export { Security };
