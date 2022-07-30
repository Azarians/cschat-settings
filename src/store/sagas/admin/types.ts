import { T_SiteId } from '../../../helpers/types/commons';
import { AUTHORIZE_ADMIN_REQUESTED } from './actionTypes';

export type T_authorizeAdminRequested = {
	type: typeof AUTHORIZE_ADMIN_REQUESTED;
	payload: {
		sid: T_SiteId;
	};
};
