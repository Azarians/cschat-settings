import { getUrlParameter } from 'cschat-helpers';

const SITE_ID = '649b60a0-eb22-4e28-9aab-b71024838001'; //getUrlParameter('instance');

const APP_ID = '649b60a0-eb22';

const APP_PATHS = {
	main: 'main',
	localize: 'localize',
	chat: 'chat',
	support: 'support',
	upgrade: 'upgrade',
	security: 'security',
	display: 'display',
	design: 'design',
	texts: 'texts'
} as const;

const CONNECTION_STATUSES = ['online', 'offline'] as const;

const VISIBILITY_TYPES = ['private', 'group'];

const SITE_LANGUAGE = getUrlParameter('lang') || window.Wix.Utils.getLocale() || 'en';

export { SITE_ID, APP_PATHS, CONNECTION_STATUSES, VISIBILITY_TYPES, APP_ID, SITE_LANGUAGE };
