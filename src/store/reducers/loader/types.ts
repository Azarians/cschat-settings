import { LOADER_IDS } from '../../../helpers/constants/loader';
import { SET_LOADER } from './actionTypes';

export type T_LoaderId = keyof typeof LOADER_IDS;

export type T_LoaderState = {
	requestsInProcess: {
		[key in T_LoaderId]: boolean;
	};
};

export type T_setLoader = {
	type: typeof SET_LOADER;
	payload: {
		loaderId: T_LoaderId;
		status: boolean;
	};
};

export type T_LoaderReducerAction = T_setLoader;
