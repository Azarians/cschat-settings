import { T_ConnectionStatus } from './commons';

export type T_Admin = {
	_id: string;
	siteId: string;
	country: string;
	status: T_ConnectionStatus;
	createdAt: number;
};
