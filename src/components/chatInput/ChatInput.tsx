import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { TEST_SITE_ID } from '../../helpers/constants/commons';
import { selectUId } from '../../store/reducers/user/selectors';
import { sendMessage } from './../../helpers/functions/webSocket';

type T_Props = {};

const ChatInput: FC<T_Props> = () => {
	const [message, setMessage] = useState('');
	const uid = useSelector(selectUId);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				sendMessage?.({
					text: message,
					uid,
					sid: TEST_SITE_ID
				});
				setMessage('');
			}}
		>
			<input
				type='text'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<input type='submit' />
		</form>
	);
};

export { ChatInput };
