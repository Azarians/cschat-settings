import { T_Chat } from '../../helpers/types/chat';
import { T_Settings } from '../../helpers/types/settings';

export type T_ResponseAuthorizeChat = {
	chat: T_Chat;
	settings: T_Settings | null;
};
