import { ADD_NEW_MESSAGE, GET_MESSAGES_SUCCEEDED } from './actionTypes';
import { T_MessagesReducerAction, T_MessagesState } from './types';

const initialState: T_MessagesState = {
	list: []
};

const messagesReducer = (state = initialState, { type, payload }: T_MessagesReducerAction) => {
	switch (type) {
		case GET_MESSAGES_SUCCEEDED:
			return {
				...state,
				list: payload.messages
			};
		case ADD_NEW_MESSAGE:
			return {
				...state,
				list: [...state.list, payload.message]
			};
		default:
			return state;
	}
};

export { messagesReducer };
