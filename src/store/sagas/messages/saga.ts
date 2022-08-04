import { R_getMessages } from '../../../api/messages/api';
import { LOADER_IDS } from '../../../helpers/constants/loader';
import { T_Message } from '../../../helpers/types/message';
import { setLoader } from '../../reducers/loader/actionCreators';
import { getMessagesSucceeded } from '../../reducers/messages/actionCreators';
import { GET_MESSAGES_REQUESTED } from './actionTypes';
import { T_getMessagesRequested } from './types';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* SWO_GetMessages({ payload }: T_getMessagesRequested) {
	try {
		yield put(setLoader(LOADER_IDS.getMessages, true));

		const messages: T_Message[] = yield call(R_getMessages, payload);
		yield put(getMessagesSucceeded(messages));

		yield put(setLoader(LOADER_IDS.getMessages, false));
	} catch (e) {
		console.log(e);
	}
}

function* SWA_Messages() {
	yield all([takeLatest(GET_MESSAGES_REQUESTED, SWO_GetMessages)]);
}

export { SWA_Messages };
