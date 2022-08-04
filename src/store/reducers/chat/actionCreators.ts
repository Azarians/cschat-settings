import { T_Chat } from '../../../helpers/types/chat';
import { AUTHORIZE_CHAT_SUCCEEDED } from './actionTypes';
import { T_authorizeChatSucceeded } from './types';

const authorizeChatSucceeded = (chat: T_Chat): T_authorizeChatSucceeded => ({
	type: AUTHORIZE_CHAT_SUCCEEDED,
	payload: {
		chat
	}
});

export { authorizeChatSucceeded };
