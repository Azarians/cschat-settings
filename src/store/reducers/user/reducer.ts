import { USER_ROLES } from '../../../helpers/constants/user';
import { SET_USER } from './actionTypes';
import { T_UserState, T_UserReducerAction } from './types';

const initialState: T_UserState = {
	_id: '',
	sid: '',
	role: USER_ROLES.guest,
	created_at: NaN
};

const userReducer = (state = initialState, { type, payload }: T_UserReducerAction) => {
	switch (type) {
		case SET_USER:
			return {
				...state,
				...payload.user
			};
		default:
			return state;
	}
};

export { userReducer };
