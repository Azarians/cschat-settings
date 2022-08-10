import { Countries } from '../../components/blackListSections/Countries';
import { Emails } from '../../components/blackListSections/Emails';
import { IPs } from '../../components/blackListSections/IPs';

const LANGUAGES_LIST = {
	'en': { id: 0, value: 'English', code: 'en' },
	'da': { id: 1, value: 'Danish', code: 'da' },
	'de': { id: 2, value: 'German', code: 'de' },
	'es': { id: 3, value: 'Spanish', code: 'es' },
	'fr': { id: 4, value: 'French', code: 'fr' },
	'it': { id: 5, value: 'Italian', code: 'it' },
	'nl': { id: 6, value: 'Dutch', code: 'nl' },
	'nb': { id: 7, value: 'Norwegian', code: 'nb' },
	'pl': { id: 8, value: 'Polish', code: 'pl' },
	'pt': { id: 9, value: 'Portuguese', code: 'pt' },
	'ru': { id: 10, value: 'Russian', code: 'ru' },
	'sv': { id: 11, value: 'Swedish', code: 'sv' },
	'ja': { id: 12, value: 'Japanese', code: 'ja' },
	'ko': { id: 13, value: 'Korean', code: 'ko' },
	'tr': { id: 14, value: 'Turkish', code: 'tr' },
	'he': { id: 15, value: 'Hebrew', code: 'he' },
	'lv': { id: 16, value: 'Latvian', code: 'lv' },
	'cs': { id: 17, value: 'Czech', code: 'cs' },
	'bg': { id: 18, value: 'Bulgarian', code: 'bg' },
	'el': { id: 19, value: 'Greek', code: 'el' },
	'uk': { id: 20, value: 'Ukrainian', code: 'uk' },
	'ar': { id: 21, value: 'Arabic', code: 'ar' },
	'fa': { id: 22, value: 'Persian', code: 'fa' },
	'th': { id: 23, value: 'Thai', code: 'th' },
	'hi': { id: 24, value: 'Hindi', code: 'hi' },
	'zh-cn': { id: 25, value: 'Chinese', code: 'zh-cn' },
	'hu': { id: 26, value: 'Hungarian', code: 'hu' }
};

const TIME_FORMAT_TYPES = ['am/pm', '24h'] as const;

const AUTHORIZATION_FIELD_NAMES = ['firstName', 'lastName', 'email'] as const;

const AUTHORIZATION_FIELDS = [
	{
		name: AUTHORIZATION_FIELD_NAMES[0],
		label: 'First Name',
		id: 0
	},
	{
		name: AUTHORIZATION_FIELD_NAMES[1],
		label: 'Last Name',
		id: 1
	},
	{
		name: AUTHORIZATION_FIELD_NAMES[2],
		label: 'Email Address',
		id: 2
	}
];

const BLACK_LIST_SECTIONS = [
	{
		id: 0,
		label: 'Emails List',
		Content: Emails
	},
	{
		id: 1,
		label: 'Countries List',
		Content: Countries
	},
	{
		id: 2,
		label: 'IPs List',
		Content: IPs
	}
];

export {
	LANGUAGES_LIST,
	TIME_FORMAT_TYPES,
	AUTHORIZATION_FIELDS,
	AUTHORIZATION_FIELD_NAMES,
	BLACK_LIST_SECTIONS
};
