import { R_authorizeAdmin } from '../../../api/admin/api';
import { SITE_ID } from '../../../helpers/constants/commons';
import { LOADER_IDS } from '../../../helpers/constants/loader';
import { RECEIVE_MESSAGE_EVENT_NAME } from '../../../helpers/constants/webSocket';
import { T_Admin } from '../../../helpers/types/admin';
import { authorizeAdminSecceeded } from '../../reducers/admin/actionCreators';
import { setLoader } from '../../reducers/loader/actionCreators';
import { getMessagesRequested } from '../messages/actionCreators';
import { getUsersRequested } from '../users/actionCreators';
import { AUTHORIZE_ADMIN_REQUESTED } from './actionTypes';
import { T_authorizeAdminRequested } from './types';
import { establishSocketConnection } from 'cschat-helpers';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* SWO_AuthorizeAdmin({ payload: { chatId, chatRoomIds } }: T_authorizeAdminRequested) {
	try {
		yield put(setLoader(LOADER_IDS.authorizeAdmin, true));

		const admin: T_Admin = yield call(R_authorizeAdmin, SITE_ID);

		yield put(authorizeAdminSecceeded(admin));

		establishSocketConnection({
			userId: admin._id,
			siteId: SITE_ID,
			chatRoomIds,
			receiveMessageEventName: RECEIVE_MESSAGE_EVENT_NAME
		});

		yield put(getMessagesRequested(SITE_ID, chatId));

		yield put(getUsersRequested(chatId));

		yield put(setLoader(LOADER_IDS.authorizeAdmin, false));
	} catch (e) {
		console.log(e);
	}
}

function* SWA_Admin() {
	yield all([takeLatest(AUTHORIZE_ADMIN_REQUESTED, SWO_AuthorizeAdmin)]);
}

export { SWA_Admin };
