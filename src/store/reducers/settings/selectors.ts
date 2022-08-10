import { T_Language, T_TimeFormat } from '../../../helpers/types/settings';
import { T_RootState } from './../../index';
import { T_SettingsState } from './types';

const selectSettings = (state: T_RootState): T_SettingsState => state.settings.present;
const selectIsSettingsChanged = (state: T_RootState): boolean =>
	!!(state.settings.index && state.settings.index > 0);
const selectLanguage = (state: T_RootState): T_Language => state.settings.present.language;
const selectTimeFormat = (state: T_RootState): T_TimeFormat => state.settings.present.timeFormat;
const selectTranslateIntoSiteLanguage = (state: T_RootState): boolean =>
	state.settings.present.translateIntoSiteLanguage;
const selectAuthorization = (state: T_RootState): T_SettingsState['security']['authorization'] =>
	state.settings.present.security.authorization;
const selectBLackListEmails = (
	state: T_RootState
): T_SettingsState['security']['blackList']['emails'] =>
	state.settings.present.security.blackList.emails;
const selectBLackListCountries = (
	state: T_RootState
): T_SettingsState['security']['blackList']['countries'] =>
	state.settings.present.security.blackList.countries;
const selectBLackListIPs = (state: T_RootState): T_SettingsState['security']['blackList']['ips'] =>
	state.settings.present.security.blackList.ips;

export {
	selectLanguage,
	selectTranslateIntoSiteLanguage,
	selectTimeFormat,
	selectAuthorization,
	selectBLackListEmails,
	selectBLackListCountries,
	selectBLackListIPs,
	selectSettings,
	selectIsSettingsChanged
};
