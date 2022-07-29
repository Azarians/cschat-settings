import { T_Message } from '../../../helpers/types/message';
import { ADD_NEW_MESSAGE, GET_MESSAGES_SUCCEEDED } from './actionTypes';

export type T_MessagesState = {
	list: T_Message[];
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
	};
};

export type T_MessagesReducerAction = T_getMessagesSucceeded | T_addNewMessage;
