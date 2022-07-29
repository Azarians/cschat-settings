import { T_RootState } from './../../index';

const selectUser = (state: T_RootState) => state.user;
const selectUId = (state: T_RootState) => state.user._id;

export { selectUser, selectUId };
