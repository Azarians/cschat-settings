import { T_Language, T_TimeFormat } from '../../../helpers/types/settings';
import { T_RootState } from './../../index';

const selectLanguage = (state: T_RootState): T_Language => state.settings.language;
const selectTimeFormat = (state: T_RootState): T_TimeFormat => state.settings.timeFormat;
const selectTranslateIntoSiteLanguage = (state: T_RootState): boolean =>
	state.settings.translateIntoSiteLanguage;

export { selectLanguage, selectTranslateIntoSiteLanguage, selectTimeFormat };
