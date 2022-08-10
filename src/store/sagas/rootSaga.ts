import { SWA_Admin } from './admin/saga';
import { SWA_Chat } from './chat/saga';
import { SWA_Settings } from './settings/saga';
import { SWA_Users } from './users/saga';
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
	yield all([fork(SWA_Admin), fork(SWA_Users), fork(SWA_Chat), fork(SWA_Settings)]);
}

export { rootSaga };
