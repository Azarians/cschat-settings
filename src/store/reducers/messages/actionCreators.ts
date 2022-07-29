import { T_Message } from '../../../helpers/types/message';
import { ADD_NEW_MESSAGE, GET_MESSAGES_SUCCEEDED } from './actionTypes';
import { T_addNewMessage, T_getMessagesSucceeded } from './types';

const getMessagesSucceeded = (messages: T_Message[]): T_getMessagesSucceeded => ({
	type: GET_MESSAGES_SUCCEEDED,
	payload: {
		messages
	}
});

const addNewMessage = (message: T_Message): T_addNewMessage => ({
	type: ADD_NEW_MESSAGE,
	payload: {
		message
	}
});

export { getMessagesSucceeded, addNewMessage };
