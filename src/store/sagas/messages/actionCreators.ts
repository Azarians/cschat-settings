import { T_Chat } from '../../../helpers/types/chat';
import { T_SiteId } from '../../../helpers/types/commons';
import { GET_MESSAGES_REQUESTED } from './actionTypes';
import { T_getMessagesRequested } from './types';

const getMessagesRequested = (siteId: T_SiteId, chatId: T_Chat['_id']): T_getMessagesRequested => ({
	type: GET_MESSAGES_REQUESTED,
	payload: {
		siteId,
		chatId
	}
});

export { getMessagesRequested };
