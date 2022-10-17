import { getSiteMap } from '../functions/commons';
import { T_SiteMap } from '../types/commons';
import { getUrlParameter } from 'cschat-helpers';

const SITE_ID = '649b60a0-eb22-4e28-9aab-b71024838001'; //getUrlParameter('instance');

const APP_ID = '649b60a0-eb22';

const APP_PATHS = {
	main: 'main',
	localize: 'localize',
	support: 'support',
	upgrade: 'upgrade',
	security: {
		index: 'security',
		authorizationRules: 'authorizationRules',
		blackList: 'blackList'
	},
	display: 'display',
	design: {
		index: 'design',
		container: 'container',
		header: 'header',
		messages: 'messages',
		minimizedChat: 'minimizedChat'
	},
	texts: 'texts'
} as const;

const SITE_LANGUAGE = getUrlParameter('lang') || window.Wix.Utils.getLocale() || 'en';

const SITE_MAP: T_SiteMap = [];
getSiteMap((siteMap: T_SiteMap) => SITE_MAP.push(...siteMap));

export { SITE_ID, APP_PATHS, APP_ID, SITE_LANGUAGE, SITE_MAP };
