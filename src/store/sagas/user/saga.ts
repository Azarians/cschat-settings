import { R_authorizeUser } from '../../../api/user/api';
import { USER_ID_CNAME } from '../../../helpers/constants/user';
import { getCookie, setCookie } from '../../../helpers/functions/cookies';
import { establishSocketConnection } from '../../../helpers/functions/webSocket';
import { T_User } from '../../../helpers/types/user';
import { setUser } from '../../reducers/user/actionCreators';
import { getMessagesRequested } from './../messages/actionCreators';
import { AUTHORIZE_USER_REQUESTED } from './actionTypes';
import { T_authorizeUserRequested } from './types';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* SWO_AuthorizeUser({ payload }: T_authorizeUserRequested) {
	try {
		const uid = getCookie(USER_ID_CNAME);

		const user: T_User = yield call(R_authorizeUser, uid, payload.sid);

		if (payload.remember) {
			setCookie(USER_ID_CNAME, user._id, null);
		}

		yield put(setUser(user));

		establishSocketConnection(uid);

		yield put(getMessagesRequested(uid, payload.sid));
	} catch (e) {
		console.log(e);
	}
}

function* SWA_User() {
	yield all([takeLatest(AUTHORIZE_USER_REQUESTED, SWO_AuthorizeUser)]);
}

export { SWA_User };
