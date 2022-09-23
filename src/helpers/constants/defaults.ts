import {
	AUTHORIZATION_FIELD_NAMES,
	CHAT_POSITIONS,
	CHAT_VISIBILITY_ON_PAGES,
	LANGUAGES_LIST,
	SHOW_AUTHORIZATION_FORM_OPTIONS,
	TIME_FORMAT_TYPES
} from './settings';

const D_SETTINGS = {
	language: LANGUAGES_LIST.en.code,
	translateIntoSiteLanguage: true,
	timeFormat: TIME_FORMAT_TYPES[1],
	security: {
		authorization: {
			enabled: false,
			fields: {
				[AUTHORIZATION_FIELD_NAMES[0]]: {
					enabled: true,
					label: 'First Name',
					name: AUTHORIZATION_FIELD_NAMES[0],
					required: true
				},
				[AUTHORIZATION_FIELD_NAMES[1]]: {
					enabled: true,
					label: 'Last Name',
					name: AUTHORIZATION_FIELD_NAMES[1],
					required: true
				},
				[AUTHORIZATION_FIELD_NAMES[2]]: {
					enabled: true,
					label: 'Email Addres',
					name: AUTHORIZATION_FIELD_NAMES[2],
					required: true
				}
			},
			showForm: SHOW_AUTHORIZATION_FORM_OPTIONS[0]
		},
		blackList: {
			emails: [],
			countries: [],
			ips: []
		}
	},
	display: {
		position: CHAT_POSITIONS[0],
		visibility: {
			type: CHAT_VISIBILITY_ON_PAGES[0],
			selectedPages: []
		}
	}
};

export { D_SETTINGS };
