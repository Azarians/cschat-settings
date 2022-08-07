import { AUTHORIZATION_FIELD_NAMES, TIME_FORMAT_TYPES } from '../../../helpers/constants/settings';
import { UPDATE_SETTINGS_PARAMS } from './actionTypes';
import { T_SettingsReducerAction, T_SettingsState } from './types';

const initialState: T_SettingsState = {
	language: 'en',
	translateIntoSiteLanguage: true,
	timeFormat: TIME_FORMAT_TYPES[1],
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
		}
	}
};

const settingsReducer = (state = initialState, { payload, type }: T_SettingsReducerAction) => {
	switch (type) {
		case UPDATE_SETTINGS_PARAMS:
			return {
				...state,
				...payload.params
			};
		default:
			return state;
	}
};

export { settingsReducer };
