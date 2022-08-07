import { R_getUsers } from '../../../api/users/api';
import { LOADER_IDS } from '../../../helpers/constants/loader';
import { T_User } from '../../../helpers/types/user';
import { setLoader } from '../../reducers/loader/actionCreators';
import { getUsersSucceeded } from '../../reducers/users/actionCreators';
import { GET_USERS_REQUESTED } from './actionTypes';
import { T_getUsersRequested } from './types';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* SWO_GetUsers({ payload }: T_getUsersRequested) {
	try {
		yield put(setLoader(LOADER_IDS.getUsers, true));

		const users: T_User[] = yield call(R_getUsers, payload.chatId);

		yield put(getUsersSucceeded(users));

		yield put(setLoader(LOADER_IDS.getUsers, false));
	} catch (e) {
		console.log(e);
	}
}

function* SWA_Users() {
	yield all([takeLatest(GET_USERS_REQUESTED, SWO_GetUsers)]);
}

export { SWA_Users };
