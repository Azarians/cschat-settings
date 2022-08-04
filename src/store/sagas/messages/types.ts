import { T_Chat } from '../../../helpers/types/chat';
import { T_SiteId } from '../../../helpers/types/commons';
import { GET_MESSAGES_REQUESTED } from './actionTypes';

export type T_getMessagesRequested = {
	type: typeof GET_MESSAGES_REQUESTED;
	payload: {
		siteId: T_SiteId;
		chatId: T_Chat['_id'];
	};
};
