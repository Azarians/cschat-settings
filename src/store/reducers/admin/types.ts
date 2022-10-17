import { AUTHORIZE_ADMIN_SUCCEEDED } from './actionTypes';
import { T_Admin } from 'cschat-helpers';

export type T_AdminState = T_Admin;

export type T_authorizeAdminSucceeded = {
	type: typeof AUTHORIZE_ADMIN_SUCCEEDED;
	payload: {
		admin: T_Admin;
	};
};

export type T_AdminReducerAction = T_authorizeAdminSucceeded;
