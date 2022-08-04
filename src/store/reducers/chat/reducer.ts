import { SITE_ID } from '../../../helpers/constants/commons';
import { AUTHORIZE_CHAT_SUCCEEDED } from './actionTypes';
import { T_ChatState, T_ChatReducerAction } from './types';

const initialState: T_ChatState = {
	_id: '',
	appId: SITE_ID,
	chatRooms: [],
	createdAt: NaN
};

const chatReducer = (state = initialState, { type, payload }: T_ChatReducerAction) => {
	switch (type) {
		case AUTHORIZE_CHAT_SUCCEEDED:
			return {
				...state,
				...payload.chat
			};
		default:
			return state;
	}
};

export { chatReducer };
