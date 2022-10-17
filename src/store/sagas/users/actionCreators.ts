import { GET_USERS_REQUESTED } from './actionTypes';
import { T_getUsersRequested } from './types';
import { T_Chat } from 'cschat-helpers';

const getUsersRequested = (chatId: T_Chat['_id']): T_getUsersRequested => ({
	type: GET_USERS_REQUESTED,
	payload: {
		chatId
	}
});

export { getUsersRequested };
