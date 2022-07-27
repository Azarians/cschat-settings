import { T_Message } from '../../../helpers/types/message';
import { T_RootState } from '../../index';

const selectMessages = (state: T_RootState): T_Message[] => state.messages;

export { selectMessages };
