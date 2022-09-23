import { D_SETTINGS } from '../../../helpers/constants/defaults';
import {
	UPDATE_AUTHORIZATION,
	UPDATE_BLACK_LIST,
	UPDATE_DISPLAY_SETTINGS,
	UPDATE_SETTINGS_PARAMS
} from './actionTypes';
import { T_SettingsReducerAction, T_SettingsState } from './types';

const initialState: T_SettingsState = D_SETTINGS;

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
		case UPDATE_DISPLAY_SETTINGS: {
			return {
				...state,
				display: {
					...state.display,
					...payload.options
				}
			};
		}
		default:
			return state;
	}
};

export { settingsReducer };
