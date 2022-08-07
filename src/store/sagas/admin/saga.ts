import { R_authorizeAdmin } from '../../../api/admin/api';
import { SITE_ID } from '../../../helpers/constants/commons';
import { LOADER_IDS } from '../../../helpers/constants/loader';
import { T_Admin } from '../../../helpers/types/admin';
import { authorizeAdminSecceeded } from '../../reducers/admin/actionCreators';
import { setLoader } from '../../reducers/loader/actionCreators';
import { getUsersRequested } from '../users/actionCreators';
import { AUTHORIZE_ADMIN_REQUESTED } from './actionTypes';
import { T_authorizeAdminRequested } from './types';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* SWO_AuthorizeAdmin({ payload: { chatId } }: T_authorizeAdminRequested) {
	try {
		yield put(setLoader(LOADER_IDS.authorizeAdmin, true));

		const admin: T_Admin = yield call(R_authorizeAdmin, SITE_ID);

		yield put(authorizeAdminSecceeded(admin));

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
