import { AUTHORIZATION_FIELD_NAMES, LANGUAGES_LIST } from './../constants/settings';

export type T_Language = keyof typeof LANGUAGES_LIST;

export type T_TimeFormat = 'am/pm' | '24h';

export type T_AuthorizationFieldName = typeof AUTHORIZATION_FIELD_NAMES[number];

export type T_AuthorizationField = {
	enabled: boolean;
	required: boolean;
	label: string;
	name: T_AuthorizationFieldName;
};

export type T_Settings = {
	language: T_Language;
	translateIntoSiteLanguage: boolean;
	timeFormat: T_TimeFormat;
	security: {
		blackList: {
			emails: string[];
			countries: string[];
			ips: string[];
		};
		authorization: {
			enabled: boolean;
			fields: {
				[key in T_AuthorizationFieldName]: T_AuthorizationField;
			};
		};
	};
};
