import { SWA_Messages } from './messages/saga';
import { SWA_User } from './user/saga';
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
	yield all([fork(SWA_Messages), fork(SWA_User)]);
}

export { rootSaga };
