import { LANGUAGES_LIST } from './../constants/settings';

export type T_Language = keyof typeof LANGUAGES_LIST;

export type T_TimeFormat = 'am/pm' | '24h';

export type T_Settings = {
	language: T_Language;
	translateIntoSiteLanguage: boolean;
	timeFormat: T_TimeFormat;
};
