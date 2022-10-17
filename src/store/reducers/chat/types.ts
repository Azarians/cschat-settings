import { AUTHORIZE_CHAT_SUCCEEDED } from './actionTypes';
import { T_Chat } from 'cschat-helpers';

export type T_ChatState = T_Chat;

export type T_authorizeChatSucceeded = {
	type: typeof AUTHORIZE_CHAT_SUCCEEDED;
	payload: {
		chat: T_Chat;
	};
};

export type T_ChatReducerAction = T_authorizeChatSucceeded;
