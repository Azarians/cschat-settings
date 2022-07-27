// import { T_Message } from './../helpers/types/message';
import { RECEIVE_MESSAGE_EVENT_NAME } from '../constants/webSocket';
import { T_Message } from '../types/message';

const ws = new WebSocket(`${process.env.REACT_APP_SOCKET_URL}?id=1111`);

let sendMessage: ((message: T_Message) => void) | null = null;

ws.onopen = () => {
	console.log('ws connection opened');
	sendMessage = (message: T_Message) => {
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

export { sendMessage };
