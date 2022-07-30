import { T_SiteId } from '../../../helpers/types/commons';
import { GET_USERS_REQUESTED } from './actionTypes';
import { T_getUsersRequested } from './types';

const getUsersRequested = (sid: T_SiteId): T_getUsersRequested => ({
	type: GET_USERS_REQUESTED,
	payload: {
		sid
	}
});

export { getUsersRequested };
