import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RECEIVE_MESSAGE_EVENT_NAME } from './helpers/constants/webSocket';
import { sendMessage } from './helpers/functions/webSocket';
import { selectMessages } from './store/reducers/messages/selectors';

type T_Props = {};

const App: FC<T_Props> = () => {
	const messages = useSelector(selectMessages);
	console.log(messages);

	useEffect(() => {
		window.addEventListener(RECEIVE_MESSAGE_EVENT_NAME, (data) => {
			const { detail } = data as unknown as CustomEvent;
			console.log(detail);
		});

		setInterval(() => {
			sendMessage?.({ id: 0, text: 'hello' });
		}, 4000);
	}, []);

	return <div>coming soon...</div>;
};

export default App;
