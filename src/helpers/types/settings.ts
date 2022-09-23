import {
	AUTHORIZATION_FIELD_NAMES,
	CHAT_POSITIONS,
	CHAT_VISIBILITY_ON_PAGES,
	LANGUAGES_LIST,
	SHOW_AUTHORIZATION_FORM_OPTIONS
} from './../constants/settings';

export type T_Language = keyof typeof LANGUAGES_LIST;

export type T_TimeFormat = 'am/pm' | '24h';

export type T_AuthorizationFieldName = typeof AUTHORIZATION_FIELD_NAMES[number];

export type T_AuthorizationField = {
	enabled: boolean;
	required: boolean;
	label: string;
	name: T_AuthorizationFieldName;
};

export type T_Authorization = {
	enabled: boolean;
	fields: {
		[key in T_AuthorizationFieldName]: T_AuthorizationField;
	};
	showForm: typeof SHOW_AUTHORIZATION_FORM_OPTIONS[number];
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
		authorization: T_Authorization;
	};
	display: {
		position: typeof CHAT_POSITIONS[number];
		visibility: {
			type: typeof CHAT_VISIBILITY_ON_PAGES[number];
			selectedPages: { id: string; name: string }[];
		};
	};
};
