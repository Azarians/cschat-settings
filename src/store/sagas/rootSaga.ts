import { SWA_Messages } from './messages/saga';
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
	all([fork(SWA_Messages)]);
}

export { rootSaga };
