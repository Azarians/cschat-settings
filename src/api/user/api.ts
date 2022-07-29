import { T_SiteId } from '../../helpers/types/commons';
import { T_User } from '../../helpers/types/user';

const R_authorizeUser = (uid: T_User['_id'], sid: T_SiteId) => {
	return fetch(`${process.env.REACT_APP_API_ROOT}authorize`, {
		method: 'POST',
		body: JSON.stringify({
			uid,
			sid
		}),
		headers: {
			'content-type': 'application/json'
		}
	}).then((res) => res.json());
};

export { R_authorizeUser };
