import { T_MessagesStateAction, T_MessagesState } from './types';

const initialState: T_MessagesState = [];

const messagesReducer = (state = initialState, { type }: T_MessagesStateAction) => {
	switch (type) {
		default:
			return state;
	}
};

export { messagesReducer };
