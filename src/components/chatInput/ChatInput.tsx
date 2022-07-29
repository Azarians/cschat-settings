import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { TEST_SITE_ID } from '../../helpers/constants/commons';
import { combineClassNames } from '../../helpers/functions/commons';
import { selectUId } from '../../store/reducers/user/selectors';
import { sendMessage } from './../../helpers/functions/webSocket';
import styles from './styles.module.css';

type T_Props = {};

const ChatInput: FC<T_Props> = () => {
	const [message, setMessage] = useState<string>('');
	const [focused, setFocused] = useState<boolean>(false);
	const uid = useSelector(selectUId);

	return (
		<div className={combineClassNames(styles.container, focused ? styles.focused : '')}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!message.trim()) return;
					sendMessage?.({
						text: message,
						uid,
						sid: TEST_SITE_ID
					});
					setMessage('');
				}}
			>
				<div className={styles.input_wrapper}>
					<input
						type='text'
						value={message}
						placeholder='Type a message here'
						onChange={(e) => setMessage(e.target.value)}
						className={styles.input}
						onFocus={() => setFocused(true)}
						onBlur={() => setFocused(false)}
					/>
					<input
						type='submit'
						value='S'
						className={styles.send_button}
					/>
				</div>
			</form>
		</div>
	);
};

export { ChatInput };
