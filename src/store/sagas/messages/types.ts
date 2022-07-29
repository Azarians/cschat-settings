import { T_SiteId } from '../../../helpers/types/commons';
import { T_User } from '../../../helpers/types/user';
import { GET_MESSAGES_REQUESTED } from './actionTypes';

export type T_getMessagesRequested = {
	type: typeof GET_MESSAGES_REQUESTED;
	payload: {
		uid: T_User['_id'];
		sid: T_SiteId;
	};
};
