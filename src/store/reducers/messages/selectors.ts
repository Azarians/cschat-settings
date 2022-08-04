import { T_ChatRoom } from '../../../helpers/types/chat';
import { T_Message } from '../../../helpers/types/message';
import { T_User } from '../../../helpers/types/user';
import { T_RootState } from '../../index';

const selectSelectedUserMessages =
	(userId: T_User['_id'], chatRoomId: T_ChatRoom['_id']) =>
	(state: T_RootState): T_Message[] =>
		state.messages.byChatRoomId[chatRoomId]?.filter(
			(message) => message.senderId === userId || message.receiverId === userId
		) || [];

export { selectSelectedUserMessages };
