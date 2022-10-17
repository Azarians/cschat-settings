import { SITE_ID } from '../../../helpers/constants/commons';
import { AUTHORIZE_CHAT_SUCCEEDED } from './actionTypes';
import { T_ChatState, T_ChatReducerAction } from './types';
import { CHAT_OPENING_DURATION_UNITS } from 'cschat-helpers';

const initialState: T_ChatState = {
	_id: '',
	appId: SITE_ID,
	enabled: true,
	chatRooms: [],
	createdAt: NaN,
	blackList: {
		countries: [],
		emails: [],
		ips: []
	},
	autoOpenChat: {
		enabled: false,
		delay: {
			duration: 0,
			unit: CHAT_OPENING_DURATION_UNITS.minute
		}
	},
	introMessage: '',
	bot: {
		enabled: true,
		messages: []
	}
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
