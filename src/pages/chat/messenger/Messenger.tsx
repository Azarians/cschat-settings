import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VISIBILITY_TYPES } from '../../../helpers/constants/commons';
import { MESSAGE_DATA_MIME_TYPES, MESSAGE_STATUSES } from '../../../helpers/constants/message';
import { RECEIVE_MESSAGE_EVENT_NAME } from '../../../helpers/constants/webSocket';
import { T_Message } from '../../../helpers/types/message';
import { useCHatSelectedUserId } from '../../../hooks/useChatSelectedUserId';
import { useChatSelectedUserMessages } from '../../../hooks/useChatSelectedUserMessages';
import { selectAId } from '../../../store/reducers/admin/selectors';
import { selectChatId, selectChatRoomId } from '../../../store/reducers/chat/selectors';
import { addNewMessage } from '../../../store/reducers/messages/actionCreators';
import { sendMessage } from 'cschat-helpers';
import { Messenger as CSMessenger } from 'cschat-messenger';
import 'cschat-messenger/dist/index.css';

type T_Props = {};

const Messenger: FC<T_Props> = () => {
	const messages = useChatSelectedUserMessages();
	const selectedUserId = useCHatSelectedUserId();
	const adminId = useSelector(selectAId);
	const chatId = useSelector(selectChatId);
	const chatRoomId = useSelector(selectChatRoomId);
	const dispatch = useDispatch();

	useEffect(() => {
		const onMessage = (data: Event) => {
			const { detail: newMessage } = data as unknown as CustomEvent;
			dispatch(addNewMessage(newMessage, adminId));
		};
		window.addEventListener(RECEIVE_MESSAGE_EVENT_NAME, onMessage);
		return () => {
			window.removeEventListener(RECEIVE_MESSAGE_EVENT_NAME, onMessage);
		};
	}, []);

	if (!selectedUserId) return null;

	return (
		<CSMessenger
			messages={messages}
			onSendMessage={(message: string) => {
				const newMessage: Omit<T_Message, '_id' | 'createdAt'> = {
					senderId: adminId,
					receiverId: selectedUserId,
					type: VISIBILITY_TYPES[0],
					data: {
						mimeType: MESSAGE_DATA_MIME_TYPES[0],
						data: {
							text: message
						}
					},
					chatId,
					chatRoomId,
					status: MESSAGE_STATUSES[0]
				};
				sendMessage(newMessage);
			}}
			currentUserId={adminId}
		/>
	);
};

export { Messenger };
