import { T_RootState } from '../../index';

const selectAdmin = (state: T_RootState) => state.admin;
const selectAId = (state: T_RootState) => state.admin._id;

export { selectAdmin, selectAId };
