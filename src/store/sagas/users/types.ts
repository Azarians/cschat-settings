import { T_Chat } from '../../../helpers/types/chat';
import { GET_USERS_REQUESTED } from './actionTypes';

export type T_getUsersRequested = {
	type: typeof GET_USERS_REQUESTED;
	payload: {
		chatId: T_Chat['_id'];
	};
};
