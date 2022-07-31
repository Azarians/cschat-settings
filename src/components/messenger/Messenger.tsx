import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SITE_ID } from '../../helpers/constants/commons';
import { USER_ROLES } from '../../helpers/constants/user';
import { RECEIVE_MESSAGE_EVENT_NAME } from '../../helpers/constants/webSocket';
import { useCHatSelectedUserId } from '../../hooks/useChatSelectedUserId';
import { useChatSelectedUserMessages } from '../../hooks/useChatSelectedUserMessages';
import { selectAId } from '../../store/reducers/admin/selectors';
import { addNewMessage } from '../../store/reducers/messages/actionCreators';
import { sendMessage } from 'cschat-helpers';
import { Messenger as CSMessenger } from 'cschat-messenger';
import 'cschat-messenger/dist/index.css';

type T_Props = {};

const Messenger: FC<T_Props> = () => {
	const messages = useChatSelectedUserMessages();
	const selectedUId = useCHatSelectedUserId();
	const aid = useSelector(selectAId);
	const dispatch = useDispatch();

	useEffect(() => {
		const onMessage = (data: Event) => {
			const { detail: newMessage } = data as unknown as CustomEvent;
			dispatch(addNewMessage(newMessage, aid));
		};
		window.addEventListener(RECEIVE_MESSAGE_EVENT_NAME, onMessage);
		return () => {
			window.removeEventListener(RECEIVE_MESSAGE_EVENT_NAME, onMessage);
		};
	}, []);

	if (!selectedUId) return null;

	return (
		<CSMessenger
			messages={messages}
			onSendMessage={(message: string) => {
				sendMessage({
					text: message,
					aid,
					uid: selectedUId,
					sid: SITE_ID,
					role: USER_ROLES.admin
				});
			}}
			currentUserId={aid}
		/>
	);
};

export { Messenger };
