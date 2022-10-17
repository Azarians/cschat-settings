import { AUTHORIZE_ADMIN_REQUESTED } from './actionTypes';
import { T_authorizeAdminRequested } from './types';
import { T_Chat } from 'cschat-helpers';

const authorizeAdminRequested = (chatId: T_Chat['_id']): T_authorizeAdminRequested => ({
	type: AUTHORIZE_ADMIN_REQUESTED,
	payload: {
		chatId
	}
});

export { authorizeAdminRequested };
