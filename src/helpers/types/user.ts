import { USER_ROLES } from '../constants/user';
import { T_SiteId } from './commons';

export type T_User = {
	_id: string;
	sid: T_SiteId;
	role: keyof typeof USER_ROLES;
	created_at: number;
};
