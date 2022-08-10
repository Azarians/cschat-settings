import { T_Chat } from '../../../helpers/types/chat';
import { T_Settings } from '../../../helpers/types/settings';
import { UPDATE_SETTINGS_REQUESTED } from './actionTypes';

export type T_updateSettingsRequested = {
	type: typeof UPDATE_SETTINGS_REQUESTED;
	payload: {
		settings: Partial<T_Settings>;
		chatId: T_Chat['_id'];
	};
};
