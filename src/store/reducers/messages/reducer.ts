import { ADD_NEW_MESSAGE, GET_MESSAGES_SUCCEEDED } from './actionTypes';
import { T_MessagesReducerAction, T_MessagesState } from './types';

const initialState: T_MessagesState = {
	byUid: {}
};

const messagesReducer = (state = initialState, { type, payload }: T_MessagesReducerAction) => {
	switch (type) {
		case GET_MESSAGES_SUCCEEDED: {
			const byUid: T_MessagesState['byUid'] = {};
			const { aid, messages } = payload;
			for (let message of messages) {
				const uid = message.from === aid ? message.to : message.from;
				if (byUid[uid]) {
					byUid[uid].push(message);
					continue;
				}
				byUid[uid] = [message];
			}

			return {
				...state,
				byUid
			};
		}
		case ADD_NEW_MESSAGE: {
			const { message } = payload;
			const uid = message.to === payload.aid ? message.from : message.to;
			return {
				...state,
				byUid: {
					...state.byUid,
					[uid]: [...(state.byUid[uid] || []), message]
				}
			};
		}

		default:
			return state;
	}
};

export { messagesReducer };
