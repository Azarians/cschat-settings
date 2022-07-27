import { GET_MESSAGES_REQUESTED } from './actionTypes';
import { all, takeLatest } from 'redux-saga/effects';

function* SWO_GetMessages() {
	yield undefined;
}

function* SWA_Messages() {
	yield all([takeLatest(GET_MESSAGES_REQUESTED, SWO_GetMessages)]);
}

export { SWA_Messages };
