import { T_Chat } from '../types/chat';
import { T_Settings } from '../types/settings';

let requestSettingsUpdate: (updatedSettings: Partial<T_Settings>) => void = () => {};

type T_establishSocketConnectionArgs = {
	chatId: T_Chat['_id'];
};

const establishSocketConnection = ({ chatId }: T_establishSocketConnectionArgs) => {
	const ws = new WebSocket(`${process.env.REACT_APP_AUTOSAVE_SOCKET_URL}?chatId=${chatId}`);

	ws.onopen = () => {
		console.log('ws connection opened');
		requestSettingsUpdate = (updatedSettings) => {
			ws.send(JSON.stringify(updatedSettings));
		};
	};

	ws.onclose = () => {
		console.log('ws connection closed');
		requestSettingsUpdate = () => {};
	};
};

export { requestSettingsUpdate, establishSocketConnection };
