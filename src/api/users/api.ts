import { T_Chat } from 'cschat-helpers';

const R_getUsers = (chatId: T_Chat['_id']) => {
	return fetch(`${process.env.REACT_APP_API_ROOT}users?chatId=${chatId}`).then((res) =>
		res.json()
	);
};

export { R_getUsers };
