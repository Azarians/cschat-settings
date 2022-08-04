import { VISIBILITY_TYPES } from './../constants/commons';

export type T_ChatRoom = {
	_id: string;
	name: string;
	type: typeof VISIBILITY_TYPES[number];
	enabled: boolean;
	createdAt: number;
};

export type T_Chat = {
	_id: string;
	appId: string;
	blackList?: {
		ips: string[];
		countries: string[];
		emails: string[];
	};
	chatRooms: T_ChatRoom[];
	createdAt: number;
};
