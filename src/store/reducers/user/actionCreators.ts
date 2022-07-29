import { T_User } from '../../../helpers/types/user';
import { SET_USER } from './actionTypes';

const setUser = (user: T_User) => ({
	type: SET_USER,
	payload: {
		user
	}
});

export { setUser };
