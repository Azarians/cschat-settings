import { loaderReducer } from './loader/reducer';
import { messagesReducer } from './messages/reducer';
import { userReducer } from './user/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	messages: messagesReducer,
	user: userReducer,
	loader: loaderReducer
});

export { rootReducer };
