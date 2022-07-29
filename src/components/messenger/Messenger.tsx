import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RECEIVE_MESSAGE_EVENT_NAME } from '../../helpers/constants/webSocket';
import { addNewMessage } from '../../store/reducers/messages/actionCreators';
import { selectMessages } from '../../store/reducers/messages/selectors';
import { ChatInput } from './../chatInput/ChatInput';
import styles from './messenger.module.css';

type T_Props = {};

const Messenger: FC<T_Props> = () => {
	const messages = useSelector(selectMessages);
	const dispatch = useDispatch();

	useEffect(() => {
		window.addEventListener(RECEIVE_MESSAGE_EVENT_NAME, (data) => {
			const { detail: newMessage } = data as unknown as CustomEvent;
			dispatch(addNewMessage(newMessage));
		});
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.messages}>
				{messages.map(({ text }) => (
					<p>{text}</p>
				))}
			</div>
			<ChatInput />
		</div>
	);
};

export { Messenger };
