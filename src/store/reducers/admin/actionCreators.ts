import { T_Admin } from '../../../helpers/types/user';
import { AUTHORIZE_ADMIN_SUCCEEDED } from './actionTypes';

const authorizeAdminSecceeded = (admin: T_Admin) => ({
	type: AUTHORIZE_ADMIN_SUCCEEDED,
	payload: {
		admin
	}
});

export { authorizeAdminSecceeded };
