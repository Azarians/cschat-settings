import { T_Admin } from '../../../helpers/types/admin';
import { T_Message } from '../../../helpers/types/message';
import { T_User } from '../../../helpers/types/user';
import { ADD_NEW_MESSAGE, GET_MESSAGES_SUCCEEDED } from './actionTypes';

export type T_MessagesState = {
	byChatRoomId: {
		[key: T_User['_id']]: T_Message[];
	};
};

export type T_getMessagesSucceeded = {
	type: typeof GET_MESSAGES_SUCCEEDED;
	payload: {
		messages: T_Message[];
	};
};

export type T_addNewMessage = {
	type: typeof ADD_NEW_MESSAGE;
	payload: {
		message: T_Message;
		adminId: T_Admin['_id'];
	};
};

export type T_MessagesReducerAction = T_addNewMessage | T_getMessagesSucceeded;
