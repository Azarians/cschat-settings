import { ADD_NEW_MESSAGE, GET_MESSAGES_SUCCEEDED } from './actionTypes';
import { T_MessagesReducerAction, T_MessagesState } from './types';

const initialState: T_MessagesState = {
	byChatRoomId: {}
};

const messagesReducer = (state = initialState, { type, payload }: T_MessagesReducerAction) => {
	switch (type) {
		case GET_MESSAGES_SUCCEEDED: {
			const byChatRoomId: T_MessagesState['byChatRoomId'] = {};

			for (let message of payload.messages) {
				if (byChatRoomId[message.chatRoomId]) {
					byChatRoomId[message.chatRoomId].push(message);
					continue;
				}
				byChatRoomId[message.chatRoomId] = [message];
			}

			return {
				...state,
				byChatRoomId
			};
		}
		case ADD_NEW_MESSAGE: {
			const { message } = payload;
			return {
				...state,
				byChatRoomId: {
					...state.byChatRoomId,
					[message.chatRoomId]: [
						...(state.byChatRoomId[message.chatRoomId] || []),
						message
					]
				}
			};
		}

		default:
			return state;
	}
};

export { messagesReducer };
