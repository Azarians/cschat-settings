import { T_getMessagesRequested } from '../../store/sagas/messages/types';

const R_getMessages = ({ uid, sid }: T_getMessagesRequested['payload']) => {
	return fetch(`${process.env.REACT_APP_API_ROOT}messages?uid=${uid}&sid=${sid}`).then((res) =>
		res.json()
	);
};

export { R_getMessages };
