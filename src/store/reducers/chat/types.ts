import { T_Chat } from '../../../helpers/types/chat';
import { AUTHORIZE_CHAT_SUCCEEDED } from './actionTypes';

export type T_ChatState = T_Chat;

export type T_authorizeChatSucceeded = {
	type: typeof AUTHORIZE_CHAT_SUCCEEDED;
	payload: {
		chat: T_Chat;
	};
};

export type T_ChatReducerAction = T_authorizeChatSucceeded;
