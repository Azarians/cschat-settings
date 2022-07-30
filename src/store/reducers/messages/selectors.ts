import { T_Message } from '../../../helpers/types/message';
import { T_User } from '../../../helpers/types/user';
import { T_RootState } from '../../index';

const selectMessages = (state: T_RootState): T_Message[] =>
	state.messages.byUid[state.messages.selectedUserId] || [];
const selectSelectedUid = (state: T_RootState): T_User['_id'] => state.messages.selectedUserId;

export { selectMessages, selectSelectedUid };
