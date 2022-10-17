import { SITE_ID } from '../../../helpers/constants/commons';
import { AUTHORIZE_ADMIN_SUCCEEDED } from './actionTypes';
import { T_AdminState, T_AdminReducerAction } from './types';
import { CONNECTION_STATUSES } from 'cschat-helpers';

const initialState: T_AdminState = {
	_id: '',
	siteId: SITE_ID,
	country: 'Unknown',
	status: CONNECTION_STATUSES.online,
	createdAt: NaN
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
