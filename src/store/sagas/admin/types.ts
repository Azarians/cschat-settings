import { T_Chat, T_ChatRoom } from '../../../helpers/types/chat';
import { AUTHORIZE_ADMIN_REQUESTED } from './actionTypes';

export type T_authorizeAdminRequested = {
	type: typeof AUTHORIZE_ADMIN_REQUESTED;
	payload: {
		chatId: T_Chat['_id'];
		chatRoomIds: T_ChatRoom['_id'][];
	};
};
