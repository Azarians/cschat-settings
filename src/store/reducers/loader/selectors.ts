import { T_RootState } from '../..';

const selectShowAppLoader = (state: T_RootState) =>
	state.loader.authorizeAdmin || state.loader.authorizeChat || state.loader.getUsers;

export { selectShowAppLoader };
