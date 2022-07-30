import { T_SiteId } from '../../../helpers/types/commons';
import { T_Admin } from '../../../helpers/types/user';
import { GET_MESSAGES_REQUESTED } from './actionTypes';

export type T_getMessagesRequested = {
	type: typeof GET_MESSAGES_REQUESTED;
	payload: {
		sid: T_SiteId;
		aid: T_Admin['_id'];
	};
};
