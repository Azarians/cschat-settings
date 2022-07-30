import { R_authorizeAdmin } from '../../../api/admin/api';
import { SITE_ID } from '../../../helpers/constants/commons';
import { RECEIVE_MESSAGE_EVENT_NAME } from '../../../helpers/constants/webSocket';
import { T_Admin } from '../../../helpers/types/user';
import { authorizeAdminSecceeded } from '../../reducers/admin/actionCreators';
import { getMessagesRequested } from '../messages/actionCreators';
import { getUsersRequested } from '../users/actionCreators';
import { AUTHORIZE_ADMIN_REQUESTED } from './actionTypes';
import { T_authorizeAdminRequested } from './types';
import { establishSocketConnection } from 'cschat-helpers';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* SWO_AuthorizeAdmin({ payload }: T_authorizeAdminRequested) {
	try {
		const admin: T_Admin = yield call(R_authorizeAdmin, payload.sid);

		yield put(authorizeAdminSecceeded(admin));
		console.log(1312312312);

		establishSocketConnection(admin._id, SITE_ID, RECEIVE_MESSAGE_EVENT_NAME);

		yield put(getMessagesRequested(payload.sid, admin._id));

		yield put(getUsersRequested(payload.sid));
	} catch (e) {
		console.log(e);
	}
}

function* SWA_Admin() {
	yield all([takeLatest(AUTHORIZE_ADMIN_REQUESTED, SWO_AuthorizeAdmin)]);
}

export { SWA_Admin };
