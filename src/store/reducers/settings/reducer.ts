import { TIME_FORMAT_TYPES } from '../../../helpers/constants/settings';
import { UPDATE_SETTINGS_PARAMS } from './actionTypes';
import { T_SettingsReducerAction, T_SettingsState } from './types';

const initialState: T_SettingsState = {
	language: 'en',
	translateIntoSiteLanguage: true,
	timeFormat: TIME_FORMAT_TYPES[1]
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
