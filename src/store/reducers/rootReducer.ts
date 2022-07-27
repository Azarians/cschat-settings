import { messagesReducer } from './messages/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	messages: messagesReducer
});

export { rootReducer };
