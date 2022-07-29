import { T_User } from './user';

export type T_Message = {
	_id: string;
	text: string;
	from: T_User['_id'];
	to: T_User['_id'];
	created_at: number;
};
