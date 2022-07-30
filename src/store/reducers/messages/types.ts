import { T_Message } from '../../../helpers/types/message';
import { T_Admin, T_User } from '../../../helpers/types/user';
import { ADD_NEW_MESSAGE, GET_MESSAGES_SUCCEEDED, SET_SELECTED_USER_ID } from './actionTypes';

export type T_MessagesState = {
	byUid: {
		[key: T_User['_id']]: T_Message[];
	};
	selectedUserId: T_User['_id'];
};

export type T_getMessagesSucceeded = {
	type: typeof GET_MESSAGES_SUCCEEDED;
	payload: {
		messages: T_Message[];
		aid: T_Admin['_id'];
	};
};

export type T_addNewMessage = {
	type: typeof ADD_NEW_MESSAGE;
	payload: {
		message: T_Message;
		aid: T_Admin['_id'];
	};
};

export type T_setSelectedUserId = {
	type: typeof SET_SELECTED_USER_ID;
	payload: {
		uid: T_User['_id'];
	};
};

export type T_MessagesReducerAction =
	| T_addNewMessage
	| T_setSelectedUserId
	| T_getMessagesSucceeded;
