import { T_updateSettingsRequested } from '../../store/sagas/settings/types';

const R_updateSettings = (body: T_updateSettingsRequested['payload']) => {
	return fetch(`${process.env.REACT_APP_API_ROOT}settings`, {
		method: 'PUT',
		body: JSON.stringify(body),
		headers: {
			'content-type': 'application/json'
		}
	}).then((res) => res.json());
};

export { R_updateSettings };
