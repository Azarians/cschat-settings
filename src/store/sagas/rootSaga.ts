import { SWA_Admin } from './admin/saga';
import { SWA_Messages } from './messages/saga';
import { SWA_Users } from './users/saga';
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
	yield all([fork(SWA_Messages), fork(SWA_Admin), fork(SWA_Users)]);
}

export { rootSaga };
