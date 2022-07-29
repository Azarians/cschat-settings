import { T_RootState } from '../..';
import { T_LoaderId } from './types';

const selectLoaderStatusById =
	(loaderId: T_LoaderId) =>
	(state: T_RootState): boolean =>
		state.loader.requestsInProcess[loaderId];

export { selectLoaderStatusById };
