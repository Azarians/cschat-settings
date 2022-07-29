import { T_SiteId } from '../../../helpers/types/commons';
import { AUTHORIZE_USER_REQUESTED } from './actionTypes';

export type T_authorizeUserRequested = {
	type: typeof AUTHORIZE_USER_REQUESTED;
	payload: {
		sid: T_SiteId;
		remember: boolean;
	};
};
