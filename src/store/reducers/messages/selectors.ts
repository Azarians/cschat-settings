import { T_Message } from '../../../helpers/types/message';
import { T_User } from '../../../helpers/types/user';
import { T_RootState } from '../../index';

const selectSelectedUserMessages =
	(uid: T_User['_id']) =>
	(state: T_RootState): T_Message[] =>
		state.messages.byUid[uid] || [];

export { selectSelectedUserMessages };
