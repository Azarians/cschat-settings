import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RECEIVE_MESSAGE_EVENT_NAME } from '../../helpers/constants/webSocket';
import { combineClassNames } from '../../helpers/functions/commons';
import { addNewMessage } from '../../store/reducers/messages/actionCreators';
import { selectMessages } from '../../store/reducers/messages/selectors';
import { selectUId } from '../../store/reducers/user/selectors';
import { ChatInput } from './../chatInput/ChatInput';
import styles from './messenger.module.css';

type T_Props = {};

const Messenger: FC<T_Props> = () => {
	const messages = useSelector(selectMessages);
	const uid = useSelector(selectUId);
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
				{messages.map(({ text, from }) => (
					<div
						className={combineClassNames(
							styles.message_wrapper,
							from === uid ? styles.sent : styles.received
						)}
					>
						<p>{text}</p>
					</div>
				))}
			</div>
			<ChatInput />
		</div>
	);
};

export { Messenger };
