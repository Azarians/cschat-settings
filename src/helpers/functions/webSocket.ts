import { T_SiteId } from '../types/commons';
import { T_User } from '../types/user';
import { TEST_SITE_ID } from './../constants/commons';
import { RECEIVE_MESSAGE_EVENT_NAME } from './../constants/webSocket';

type T_sendMessageParams = { uid: T_User['_id']; text: string; sid: T_SiteId };

let sendMessage: ((message: T_sendMessageParams) => void) | null = null;

const establishSocketConnection = (uid: T_User['_id']) => {
	const ws = new WebSocket(`${process.env.REACT_APP_SOCKET_URL}?sid=${TEST_SITE_ID}&uid=${uid}`);

	ws.onopen = () => {
		console.log('ws connection opened');
		sendMessage = (message: T_sendMessageParams) => {
			ws.send(JSON.stringify(message));
		};
	};

	ws.onmessage = (receivedMessage) => {
		const receiveMessageEvent = new CustomEvent(RECEIVE_MESSAGE_EVENT_NAME, {
			detail: JSON.parse(receivedMessage.data)
		});
		window.dispatchEvent(receiveMessageEvent);
	};

	ws.onclose = () => {
		console.log('ws connection closed');
		sendMessage = null;
	};
};

export { sendMessage, establishSocketConnection };
