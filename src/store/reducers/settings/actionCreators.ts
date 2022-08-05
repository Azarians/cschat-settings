import { T_Settings } from '../../../helpers/types/settings';
import { UPDATE_SETTINGS_PARAMS } from './actionTypes';

const updateSettingsParams = (params: Partial<T_Settings>) => ({
	type: UPDATE_SETTINGS_PARAMS,
	payload: {
		params
	}
});

export { updateSettingsParams };
