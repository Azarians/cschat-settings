import { AUTHORIZE_CHAT_REQUESTED } from './actionTypes';
import { T_authorizeChatRequested } from './types';

const authorizeChatRequested = (): T_authorizeChatRequested => ({
	type: AUTHORIZE_CHAT_REQUESTED
});

export { authorizeChatRequested };
