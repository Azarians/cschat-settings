import { T_SiteId } from '../../../helpers/types/commons';
import { GET_USERS_REQUESTED } from './actionTypes';

export type T_getUsersRequested = {
	type: typeof GET_USERS_REQUESTED;
	payload: {
		sid: T_SiteId;
	};
};
