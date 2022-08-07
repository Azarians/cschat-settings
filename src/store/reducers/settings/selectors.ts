import { T_Language, T_TimeFormat } from '../../../helpers/types/settings';
import { T_RootState } from './../../index';
import { T_SettingsState } from './types';

const selectLanguage = (state: T_RootState): T_Language => state.settings.language;
const selectTimeFormat = (state: T_RootState): T_TimeFormat => state.settings.timeFormat;
const selectTranslateIntoSiteLanguage = (state: T_RootState): boolean =>
	state.settings.translateIntoSiteLanguage;
const selectAuthorization = (state: T_RootState): T_SettingsState['authorization'] =>
	state.settings.authorization;

export { selectLanguage, selectTranslateIntoSiteLanguage, selectTimeFormat, selectAuthorization };
