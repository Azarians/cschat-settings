import { T_Chat, T_Settings } from 'cschat-helpers';

export type T_ResponseAuthorizeChat = {
	chat: T_Chat;
	settings: T_Settings | null;
};
