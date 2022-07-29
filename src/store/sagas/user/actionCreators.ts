import { T_SiteId } from '../../../helpers/types/commons';
import { AUTHORIZE_USER_REQUESTED } from './actionTypes';
import { T_authorizeUserRequested } from './types';

const authorizeUserRequested = (sid: T_SiteId): T_authorizeUserRequested => ({
	type: AUTHORIZE_USER_REQUESTED,
	payload: {
		sid,
		remember: true
	}
});

export { authorizeUserRequested };
