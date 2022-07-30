import { T_RootState } from '../../index';

const selectUsersList = (state: T_RootState) => state.users.list;

export { selectUsersList };
