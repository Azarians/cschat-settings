import { AUTHORIZE_ADMIN_SUCCEEDED } from './actionTypes';
import { T_Admin } from 'cschat-helpers';

const authorizeAdminSecceeded = (admin: T_Admin) => ({
	type: AUTHORIZE_ADMIN_SUCCEEDED,
	payload: {
		admin
	}
});

export { authorizeAdminSecceeded };
