import { T_ResponseAuthorizeChat } from '../../../api/chat/types';
import { APP_ID } from '../../../helpers/constants/commons';
import { setLoader } from '../../reducers/loader/actionCreators';
import { updateSettingsParams } from '../../reducers/settings/actionCreators';
import { authorizeAdminRequested } from '../admin/actionCreators';
import { R_authorizeChat } from './../../../api/chat/api';
import { LOADER_IDS } from './../../../helpers/constants/loader';
import { authorizeChatSucceeded } from './../../reducers/chat/actionCreators';
import { AUTHORIZE_CHAT_REQUESTED } from './actionTypes';
import { establishSettingsSocketConnection, VIEW_MODES } from 'cschat-helpers';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionCreators } from 'redux-undo';

function* SWO_AuthorizeChat() {
	try {
		yield put(setLoader(LOADER_IDS.authorizeChat, true));

		const { chat, settings }: T_ResponseAuthorizeChat = yield call(R_authorizeChat, APP_ID);

		yield put(authorizeChatSucceeded(chat));

		establishSettingsSocketConnection({
			chatId: chat._id,
			viewMode: VIEW_MODES.editor,
			url: String(process.env.REACT_APP_AUTOSAVE_SOCKET_URL)
		});

		if (settings) yield put(updateSettingsParams(settings));

		yield put(ActionCreators.clearHistory());

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
