import { R_getMessages } from '../../../api/messages/api';
import { T_Message } from '../../../helpers/types/message';
import { getMessagesSucceeded } from '../../reducers/messages/actionCreators';
import { GET_MESSAGES_REQUESTED } from './actionTypes';
import { T_getMessagesRequested } from './types';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* SWO_GetMessages({ payload }: T_getMessagesRequested) {
	const messages: T_Message[] = yield call(R_getMessages, payload);
	yield put(getMessagesSucceeded(messages));
}

function* SWA_Messages() {
	console.log(2342);

	yield all([takeLatest(GET_MESSAGES_REQUESTED, SWO_GetMessages)]);
}

export { SWA_Messages };
