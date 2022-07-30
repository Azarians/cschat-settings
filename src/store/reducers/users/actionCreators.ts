import { T_User } from '../../../helpers/types/user';
import { GET_USERS_SUCCEEDED } from './actionTypes';
import { T_getUsersSucceeded } from './types';

const getUsersSucceeded = (list: T_User[]): T_getUsersSucceeded => ({
	type: GET_USERS_SUCCEEDED,
	payload: {
		list
	}
});

export { getUsersSucceeded };
