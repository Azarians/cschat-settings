import { SET_LOADER } from './actionTypes';
import { T_LoaderId } from './types';

const setLoader = (loaderId: T_LoaderId, status: boolean) => ({
	type: SET_LOADER,
	payload: {
		loaderId,
		status
	}
});

export { setLoader };
