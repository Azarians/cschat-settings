import { T_ResponseAuthorizeChat } from '../../../api/chat/types';
import { APP_ID } from '../../../helpers/constants/commons';
import { setLoader } from '../../reducers/loader/actionCreators';
import { updateSettingsParams } from '../../reducers/settings/actionCreators';
import { authorizeAdminRequested } from '../admin/actionCreators';
import { R_authorizeChat } from './../../../api/chat/api';
import { LOADER_IDS } from './../../../helpers/constants/loader';
import { authorizeChatSucceeded } from './../../reducers/chat/actionCreators';
import { AUTHORIZE_CHAT_REQUESTED } from './actionTypes';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* SWO_AuthorizeChat() {
	try {
		yield put(setLoader(LOADER_IDS.authorizeChat, true));

		const { chat, settings }: T_ResponseAuthorizeChat = yield call(R_authorizeChat, APP_ID);

		yield put(authorizeChatSucceeded(chat));

		if (settings) yield put(updateSettingsParams(settings));

		yield put(authorizeAdminRequested(chat._id));

		yield put(setLoader(LOADER_IDS.authorizeChat, false));
	} catch (e) {
		console.log(e);
	}
}

function* SWA_Chat() {
	yield all([takeLatest(AUTHORIZE_CHAT_REQUESTED, SWO_AuthorizeChat)]);
}

export { SWA_Chat };
