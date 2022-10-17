import { AUTHORIZE_CHAT_SUCCEEDED } from './actionTypes';
import { T_authorizeChatSucceeded } from './types';
import { T_Chat } from 'cschat-helpers';

const authorizeChatSucceeded = (chat: T_Chat): T_authorizeChatSucceeded => ({
	type: AUTHORIZE_CHAT_SUCCEEDED,
	payload: {
		chat
	}
});

export { authorizeChatSucceeded };
