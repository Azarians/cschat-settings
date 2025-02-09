import { LOADER_IDS } from '../../../helpers/constants/loader';
import { SET_LOADER } from './actionTypes';
import { T_LoaderReducerAction, T_LoaderState } from './types';

const initialState: T_LoaderState = {
	[LOADER_IDS.authorizeChat]: true,
	[LOADER_IDS.authorizeAdmin]: true,
	[LOADER_IDS.getUsers]: true,
	[LOADER_IDS.updateSettings]: false
};

const loaderReducer = (state = initialState, { type, payload }: T_LoaderReducerAction) => {
	switch (type) {
		case SET_LOADER:
			return {
				...state,
				[payload.loaderId]: payload.status
			};
		default:
			return state;
	}
};

export { loaderReducer };
