import { AUTHORIZE_ADMIN_REQUESTED } from './actionTypes';
import { T_Chat } from 'cschat-helpers';

export type T_authorizeAdminRequested = {
	type: typeof AUTHORIZE_ADMIN_REQUESTED;
	payload: {
		chatId: T_Chat['_id'];
	};
};
