import { adminReducer } from './admin/reducer';
import { chatReducer } from './chat/reducer';
import { loaderReducer } from './loader/reducer';
import { settingsReducer } from './settings/reducer';
import { usersReducer } from './users/reducer';
import { combineReducers } from 'redux';
import undoable from 'redux-undo';

const rootReducer = combineReducers({
	admin: adminReducer,
	loader: loaderReducer,
	users: usersReducer,
	chat: chatReducer,
	settings: undoable(settingsReducer)
});

export { rootReducer };
