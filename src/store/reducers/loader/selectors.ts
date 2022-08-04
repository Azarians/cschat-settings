import { T_RootState } from '../..';

const selectHasRequestsInProcess = (state: T_RootState) =>
	Object.values(state.loader).some((i) => {
		console.log(i);
		return i;
	}); // temp

export { selectHasRequestsInProcess };
