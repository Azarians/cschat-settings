import { R_updateSettings } from '../../../api/settings/api';
import { setLoader } from '../../reducers/loader/actionCreators';
import { LOADER_IDS } from './../../../helpers/constants/loader';
import { UPDATE_SETTINGS_REQUESTED } from './actionTypes';
import { T_updateSettingsRequested } from './types';
import { all, call, put, takeLatest } from 'redux-saga/effects';

function* SWO_UpdateSettings({ payload }: T_updateSettingsRequested) {
	try {
		yield put(setLoader(LOADER_IDS.updateSettings, true));

		yield call(R_updateSettings, payload);

		yield put(setLoader(LOADER_IDS.updateSettings, false));
	} catch (e) {
		console.log(e);
	}
}

function* SWA_Settings() {
	yield all([takeLatest(UPDATE_SETTINGS_REQUESTED, SWO_UpdateSettings)]);
}

export { SWA_Settings };
