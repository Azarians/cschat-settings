import { T_SiteId } from '../../../helpers/types/commons';
import { T_User } from '../../../helpers/types/user';
import { GET_MESSAGES_REQUESTED } from './actionTypes';
import { T_getMessagesRequested } from './types';

const getMessagesRequested = (uid: T_User['_id'], sid: T_SiteId): T_getMessagesRequested => ({
	type: GET_MESSAGES_REQUESTED,
	payload: {
		uid,
		sid
	}
});

export { getMessagesRequested };
