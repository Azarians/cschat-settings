import { T_getMessagesRequested } from '../../store/sagas/messages/types';

const R_getMessages = ({ chatId, siteId }: T_getMessagesRequested['payload']) => {
	return fetch(
		`${process.env.REACT_APP_API_ROOT}messages?&siteId=${siteId}&userId=&chatId=${chatId}`
	).then((res) => res.json());
};

export { R_getMessages };
