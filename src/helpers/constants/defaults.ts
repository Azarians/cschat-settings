import {
	AUTHORIZATION_FORM_FIELD_NAMES,
	CHAT_POSITIONS,
	CHAT_VISIBILITY_ON_PAGES,
	LANGUAGES_LIST,
	SHOW_AUTHORIZATION_FORM,
	TIME_FORMATS
} from 'cschat-helpers';

const D_SETTINGS = {
	language: LANGUAGES_LIST.en.code,
	translateIntoSiteLanguage: true,
	timeFormat: TIME_FORMATS._12h,
	security: {
		authorization: {
			enabled: false,
			fields: {
				[AUTHORIZATION_FORM_FIELD_NAMES.firstName]: {
					enabled: true,
					label: 'First Name',
					name: AUTHORIZATION_FORM_FIELD_NAMES.firstName,
					required: true
				},
				[AUTHORIZATION_FORM_FIELD_NAMES.lastName]: {
					enabled: true,
					label: 'Last Name',
					name: AUTHORIZATION_FORM_FIELD_NAMES.lastName,
					required: true
				},
				[AUTHORIZATION_FORM_FIELD_NAMES.email]: {
					enabled: true,
					label: 'Email Addres',
					name: AUTHORIZATION_FORM_FIELD_NAMES.email,
					required: true
				}
			},
			showForm: SHOW_AUTHORIZATION_FORM.onOpenChat
		},
		blackList: {
			emails: [],
			countries: [],
			ips: []
		}
	},
	display: {
		position: CHAT_POSITIONS.bottomRight,
		visibility: {
			type: CHAT_VISIBILITY_ON_PAGES.allPages,
			selectedPages: []
		}
	}
};

export { D_SETTINGS };
