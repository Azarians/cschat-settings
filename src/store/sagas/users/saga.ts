import { R_getUsers } from '../../../api/users/api';
import { T_User } from '../../../helpers/types/user';
import { getUsersSucceeded } from '../../reducers/users/actionCreators';
import { GET_USERS_REQUESTED } from './actionTypes';
import { T_getUsersRequested } from './types';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* SWO_GetUsers({ payload }: T_getUsersRequested) {
	try {
		const users: T_User[] = yield call(R_getUsers, payload.sid);

		yield put(getUsersSucceeded(users));
	} catch (e) {
		console.log(e);
	}
}

function* SWA_Users() {
	yield all([takeLatest(GET_USERS_REQUESTED, SWO_GetUsers)]);
}

export { SWA_Users };
