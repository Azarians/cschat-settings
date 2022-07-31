import { T_Message } from '../../../helpers/types/message';
import { T_Admin } from '../../../helpers/types/user';
import { ADD_NEW_MESSAGE, GET_MESSAGES_SUCCEEDED } from './actionTypes';
import { T_addNewMessage, T_getMessagesSucceeded } from './types';

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

export { getMessagesSucceeded, addNewMessage };
