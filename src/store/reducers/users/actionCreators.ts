import { GET_USERS_SUCCEEDED } from './actionTypes';
import { T_getUsersSucceeded } from './types';
import { T_User } from 'cschat-helpers';

const getUsersSucceeded = (list: T_User[]): T_getUsersSucceeded => ({
	type: GET_USERS_SUCCEEDED,
	payload: {
		list
	}
});

export { getUsersSucceeded };
