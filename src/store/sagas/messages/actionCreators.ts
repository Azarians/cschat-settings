import { T_SiteId } from '../../../helpers/types/commons';
import { T_Admin } from '../../../helpers/types/user';
import { GET_MESSAGES_REQUESTED } from './actionTypes';
import { T_getMessagesRequested } from './types';

const getMessagesRequested = (sid: T_SiteId, aid: T_Admin['_id']): T_getMessagesRequested => ({
	type: GET_MESSAGES_REQUESTED,
	payload: {
		sid,
		aid
	}
});

export { getMessagesRequested };
