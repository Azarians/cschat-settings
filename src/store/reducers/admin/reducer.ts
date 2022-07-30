import { USER_ROLES } from '../../../helpers/constants/user';
import { AUTHORIZE_ADMIN_SUCCEEDED } from './actionTypes';
import { T_AdminState, T_AdminReducerAction } from './types';

const initialState: T_AdminState = {
	_id: '',
	sid: '',
	role: USER_ROLES.admin,
	created_at: NaN
};

const adminReducer = (state = initialState, { type, payload }: T_AdminReducerAction) => {
	switch (type) {
		case AUTHORIZE_ADMIN_SUCCEEDED:
			return {
				...state,
				...payload.admin
			};
		default:
			return state;
	}
};

export { adminReducer };
