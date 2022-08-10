import { UPDATE_SETTINGS_REQUESTED } from './actionTypes';
import { T_updateSettingsRequested } from './types';

const updateSettingsRequested = (
	payload: T_updateSettingsRequested['payload']
): T_updateSettingsRequested => ({
	type: UPDATE_SETTINGS_REQUESTED,
	payload
});

export { updateSettingsRequested };
