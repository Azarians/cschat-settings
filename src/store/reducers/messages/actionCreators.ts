import { T_Message } from '../../../helpers/types/message';
import { T_Admin, T_User } from '../../../helpers/types/user';
import { ADD_NEW_MESSAGE, GET_MESSAGES_SUCCEEDED, SET_SELECTED_USER_ID } from './actionTypes';
import { T_addNewMessage, T_getMessagesSucceeded, T_setSelectedUserId } from './types';

const getMessagesSucceeded = (
	messages: T_Message[],
	aid: T_Admin['_id']
): T_getMessagesSucceeded => ({
	type: GET_MESSAGES_SUCCEEDED,
	payload: {
		messages,
		aid
	}
});

const addNewMessage = (message: T_Message, aid: T_Admin['_id']): T_addNewMessage => ({
	type: ADD_NEW_MESSAGE,
	payload: {
		message,
		aid
	}
});

const setSelectedUserId = (uid: T_User['_id']): T_setSelectedUserId => ({
	type: SET_SELECTED_USER_ID,
	payload: {
		uid
	}
});

export { getMessagesSucceeded, addNewMessage, setSelectedUserId };
