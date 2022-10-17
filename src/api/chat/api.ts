import { T_Chat } from 'cschat-helpers';

const R_authorizeChat = (appId: T_Chat['_id']) => {
	return fetch(`${process.env.REACT_APP_API_ROOT}authchat`, {
		method: 'POST',
		body: JSON.stringify({ appId }),
		headers: {
			'content-type': 'application/json'
		}
	}).then((res) => res.json());
};

export { R_authorizeChat };
