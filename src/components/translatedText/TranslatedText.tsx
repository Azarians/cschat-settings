import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/reducers/settings/selectors';

type T_Props = {
	children: string;
};

const translations: any = {};

const TranslatedText: FC<T_Props> = ({ children }) => {
	const language = useSelector(selectLanguage);

	return <>{translations[language]?.[children] || children}</>;
};

export { TranslatedText };
