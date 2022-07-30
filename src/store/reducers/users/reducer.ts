import { GET_USERS_SUCCEEDED } from './actionTypes';
import { T_UsersReducerAction, T_UsersState } from './types';

const initialState: T_UsersState = {
	list: []
};

const usersReducer = (state = initialState, { type, payload }: T_UsersReducerAction) => {
	switch (type) {
		case GET_USERS_SUCCEEDED: {
			return {
				...state,
				list: payload.list
			};
		}
		default:
			return state;
	}
};

export { usersReducer };
