import { T_Chat, T_ChatRoom } from '../../../helpers/types/chat';
import { AUTHORIZE_ADMIN_REQUESTED } from './actionTypes';
import { T_authorizeAdminRequested } from './types';

const authorizeAdminRequested = (
	chatId: T_Chat['_id'],
	chatRoomIds: T_ChatRoom['_id'][]
): T_authorizeAdminRequested => ({
	type: AUTHORIZE_ADMIN_REQUESTED,
	payload: {
		chatId,
		chatRoomIds
	}
});

export { authorizeAdminRequested };
