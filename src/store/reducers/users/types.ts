import { GET_USERS_SUCCEEDED } from './actionTypes';
import { T_User } from 'cschat-helpers';

export type T_UsersState = {
	list: T_User[];
};

export type T_getUsersSucceeded = {
	type: typeof GET_USERS_SUCCEEDED;
	payload: {
		list: T_User[];
	};
};

export type T_UsersReducerAction = T_getUsersSucceeded;
