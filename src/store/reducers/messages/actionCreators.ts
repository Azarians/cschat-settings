import { T_Admin } from '../../../helpers/types/admin';
import { T_Message } from '../../../helpers/types/message';
import { ADD_NEW_MESSAGE, GET_MESSAGES_SUCCEEDED } from './actionTypes';
import { T_addNewMessage, T_getMessagesSucceeded } from './types';

const getMessagesSucceeded = (messages: T_Message[]): T_getMessagesSucceeded => ({
	type: GET_MESSAGES_SUCCEEDED,
	payload: {
		messages
	}
});

const addNewMessage = (message: T_Message, adminId: T_Admin['_id']): T_addNewMessage => ({
	type: ADD_NEW_MESSAGE,
	payload: {
		message,
		adminId
	}
});

export { getMessagesSucceeded, addNewMessage };
