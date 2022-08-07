import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';
import { SectionNavigator } from '../../../components/sectionNavigator/SectionNavigator';
import { TranslatedText } from '../../../components/translatedText/TranslatedText';
import Stack from '@mui/material/Stack';

type T_Props = {};

const Security: FC<T_Props> = () => {
	return (
		<Stack>
			<SectionHeader hideTopBorder>
				<TranslatedText>Chat Security</TranslatedText>
			</SectionHeader>
			<NavLink to='authorizationRules'>
				<SectionNavigator hideTopBorder>
					<TranslatedText>Authorization Rules</TranslatedText>
				</SectionNavigator>
			</NavLink>
			<NavLink to='blackList'>
				<SectionNavigator hideTopBorder>
					<TranslatedText>Black List</TranslatedText>
				</SectionNavigator>
			</NavLink>
		</Stack>
	);
};

export { Security };
