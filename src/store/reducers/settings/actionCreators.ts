import { T_Settings } from '../../../helpers/types/settings';
import {
	UPDATE_AUTHORIZATION,
	UPDATE_BLACK_LIST,
	UPDATE_DISPLAY_SETTINGS,
	UPDATE_SETTINGS_PARAMS
} from './actionTypes';
import {
	T_updateAuthorization,
	T_updateBlackList,
	T_updateSettingsParams,
	T_updateDisplaySettings
} from './types';

const updateSettingsParams = (params: Partial<T_Settings>): T_updateSettingsParams => ({
	type: UPDATE_SETTINGS_PARAMS,
	payload: {
		params
	}
});

const updateAuthorization = (
	options: Partial<T_Settings['security']['authorization']>
): T_updateAuthorization => ({
	type: UPDATE_AUTHORIZATION,
	payload: {
		options
	}
});

const updateBlackList = (
	options: Partial<T_Settings['security']['blackList']>
): T_updateBlackList => ({
	type: UPDATE_BLACK_LIST,
	payload: {
		options
	}
});

const updateDisplaySettings = (
	options: Partial<T_Settings['display']>
): T_updateDisplaySettings => ({
	type: UPDATE_DISPLAY_SETTINGS,
	payload: {
		options
	}
});

export { updateSettingsParams, updateAuthorization, updateBlackList, updateDisplaySettings };
