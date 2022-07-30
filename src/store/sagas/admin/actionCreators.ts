import { T_SiteId } from '../../../helpers/types/commons';
import { AUTHORIZE_ADMIN_REQUESTED } from './actionTypes';
import { T_authorizeAdminRequested } from './types';

const authorizeAdminRequested = (sid: T_SiteId): T_authorizeAdminRequested => ({
	type: AUTHORIZE_ADMIN_REQUESTED,
	payload: {
		sid
	}
});

export { authorizeAdminRequested };
