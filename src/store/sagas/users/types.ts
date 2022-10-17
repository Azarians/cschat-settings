import { GET_USERS_REQUESTED } from './actionTypes';
import { T_Chat } from 'cschat-helpers';

export type T_getUsersRequested = {
	type: typeof GET_USERS_REQUESTED;
	payload: {
		chatId: T_Chat['_id'];
	};
};
