import { adminReducer } from './admin/reducer';
import { loaderReducer } from './loader/reducer';
import { messagesReducer } from './messages/reducer';
import { usersReducer } from './users/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	messages: messagesReducer,
	admin: adminReducer,
	loader: loaderReducer,
	users: usersReducer
});

export { rootReducer };
