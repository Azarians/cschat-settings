import { APP_ID } from '../../../helpers/constants/commons';
import { setLoader } from '../../reducers/loader/actionCreators';
import { authorizeAdminRequested } from '../admin/actionCreators';
import { R_authorizeChat } from './../../../api/chat/api';
import { LOADER_IDS } from './../../../helpers/constants/loader';
import { T_Chat } from './../../../helpers/types/chat';
import { authorizeChatSucceeded } from './../../reducers/chat/actionCreators';
import { AUTHORIZE_CHAT_REQUESTED } from './actionTypes';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* SWO_AuthorizeChat() {
	try {
		yield put(setLoader(LOADER_IDS.authorizeChat, true));

		const chat: T_Chat = yield call(R_authorizeChat, APP_ID);

		yield put(authorizeChatSucceeded(chat));

		const charRoomIds = chat.chatRooms.map((chatRoom) => chatRoom._id);

		yield put(authorizeAdminRequested(chat._id, charRoomIds));

		yield put(setLoader(LOADER_IDS.authorizeChat, false));
	} catch (e) {
		console.log(e);
	}
}

function* SWA_Chat() {
	yield all([takeLatest(AUTHORIZE_CHAT_REQUESTED, SWO_AuthorizeChat)]);
}

export { SWA_Chat };
