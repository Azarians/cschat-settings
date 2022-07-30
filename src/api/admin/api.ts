import { T_SiteId } from '../../helpers/types/commons';

const R_authorizeAdmin = (sid: T_SiteId) => {
	return fetch(`${process.env.REACT_APP_API_ROOT}authadmin`, {
		method: 'POST',
		body: JSON.stringify({
			sid
		}),
		headers: {
			'content-type': 'application/json'
		}
	}).then((res) => res.json());
};

export { R_authorizeAdmin };
