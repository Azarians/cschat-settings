import { T_User } from '../../../helpers/types/user';
import { SET_USER } from './actionTypes';

export type T_UserState = T_User;

export type T_setUser = {
	type: typeof SET_USER;
	payload: {
		user: T_User;
	};
};

export type T_UserReducerAction = T_setUser;
