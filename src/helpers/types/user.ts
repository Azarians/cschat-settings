import { T_Chat } from './chat';
import { T_ConnectionStatus } from './commons';

export type T_User = {
	_id: string;
	chatId: T_Chat['_id'];
	displayData?: {
		firstName: string;
		lastName: string;
		email: string;
	};
	country: string;
	status: T_ConnectionStatus;
	createdAt: number;
};
