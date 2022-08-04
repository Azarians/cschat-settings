import { CONNECTION_STATUSES, SITE_ID } from '../../../helpers/constants/commons';
import { AUTHORIZE_ADMIN_SUCCEEDED } from './actionTypes';
import { T_AdminState, T_AdminReducerAction } from './types';

const initialState: T_AdminState = {
	_id: '',
	siteId: SITE_ID,
	country: 'Unknown',
	status: CONNECTION_STATUSES[0],
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
