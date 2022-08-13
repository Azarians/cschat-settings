import {
	AUTHORIZATION_FIELD_NAMES,
	SHOW_AUTHORIZATION_FORM_OPTIONS,
	TIME_FORMAT_TYPES
} from '../../../helpers/constants/settings';
import { UPDATE_AUTHORIZATION, UPDATE_BLACK_LIST, UPDATE_SETTINGS_PARAMS } from './actionTypes';
import { T_SettingsReducerAction, T_SettingsState } from './types';

const initialState: T_SettingsState = {
	language: 'en',
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
	}
};

const settingsReducer = (
	state = initialState,
	{ payload, type }: T_SettingsReducerAction
): T_SettingsState => {
	switch (type) {
		case UPDATE_SETTINGS_PARAMS:
			return {
				...state,
				...payload.params
			};
		case UPDATE_AUTHORIZATION:
			return {
				...state,
				security: {
					...state.security,
					authorization: {
						...state.security.authorization,
						...payload.options
					}
				}
			};
		case UPDATE_BLACK_LIST:
			return {
				...state,
				security: {
					...state.security,
					blackList: {
						...state.security.blackList,
						...payload.options
					}
				}
			};
		default:
			return state;
	}
};

export { settingsReducer };
