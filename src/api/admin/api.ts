import { T_SiteId } from 'cschat-helpers';

const R_authorizeAdmin = (siteId: T_SiteId) => {
	return fetch(`${process.env.REACT_APP_API_ROOT}authadmin`, {
		method: 'POST',
		body: JSON.stringify({
			siteId
		}),
		headers: {
			'content-type': 'application/json'
		}
	}).then((res) => res.json());
};

export { R_authorizeAdmin };
