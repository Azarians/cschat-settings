import { T_RootState } from '../../index';

const selectChat = (state: T_RootState) => state.chat;
const selectChatId = (state: T_RootState) => state.chat._id;
const selectChatRoomId = (state: T_RootState) => state.chat.chatRooms[0]._id;

export { selectChat, selectChatId, selectChatRoomId };
