import { T_Settings } from '../../../helpers/types/settings';
import { UPDATE_AUTHORIZATION, UPDATE_BLACK_LIST, UPDATE_SETTINGS_PARAMS } from './actionTypes';

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

export type T_SettingsReducerAction =
	| T_updateAuthorization
	| T_updateBlackList
	| T_updateSettingsParams;
