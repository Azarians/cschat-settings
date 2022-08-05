import { T_RootState } from '../..';

const selectHasRequestsInProcess = (state: T_RootState) =>
	Object.values(state.loader).some((i: boolean) => i);

export { selectHasRequestsInProcess };
