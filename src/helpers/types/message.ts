import { MESSAGE_DATA_MIME_TYPES, MESSAGE_STATUSES } from '../constants/message';
import { VISIBILITY_TYPES } from './../constants/commons';
import { T_Admin } from './admin';
import { T_Chat, T_ChatRoom } from './chat';
import { T_User } from './user';

export type T_Message = {
	_id: string;
	data: {
		mimeType: typeof MESSAGE_DATA_MIME_TYPES[number];
		data: {
			text?: string;
			uri?: string;
			fileName?: string;
			fileSize?: string;
		};
	};
	chatId: T_Chat['_id'];
	chatRoomId: T_ChatRoom['_id'];
	senderId: T_User['_id'] | T_Admin['_id'];
	receiverId?: T_User['_id'] | T_Admin['_id'];
	type: typeof VISIBILITY_TYPES[number];
	status: typeof MESSAGE_STATUSES[number];
	createdAt: number;
};
