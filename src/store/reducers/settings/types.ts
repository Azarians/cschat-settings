import {
	UPDATE_AUTHORIZATION,
	UPDATE_BLACK_LIST,
	UPDATE_DISPLAY_SETTINGS,
	UPDATE_SETTINGS_PARAMS
} from './actionTypes';
import { T_Settings } from 'cschat-helpers';

export type T_SettingsState = T_Settings;

export type T_updateSettingsParams = {
	type: typeof UPDATE_SETTINGS_PARAMS;
	payload: {
		params: Partial<T_Settings>;
	};
};

export type T_updateAuthorization = {
	type: typeof UPDATE_AUTHORIZATION;
	payload: {
		options: Partial<T_Settings['security']['authorization']>;
	};
};

export type T_updateBlackList = {
	type: typeof UPDATE_BLACK_LIST;
	payload: {
		options: Partial<T_Settings['security']['blackList']>;
	};
};

export type T_updateDisplaySettings = {
	type: typeof UPDATE_DISPLAY_SETTINGS;
	payload: {
		options: Partial<T_Settings['display']>;
	};
};

export type T_SettingsReducerAction =
	| T_updateAuthorization
	| T_updateBlackList
	| T_updateSettingsParams
	| T_updateDisplaySettings;
