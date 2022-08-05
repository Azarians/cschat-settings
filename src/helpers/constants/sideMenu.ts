import { APP_PATHS } from './commons';

const SIDE_MENU_OPTIONS = [
	{
		label: 'Main',
		path: APP_PATHS.main,
		id: 0
	},
	{
		label: 'Chat',
		path: APP_PATHS.chat,
		id: 1
	},
	{
		label: 'Localize',
		path: APP_PATHS.localize,
		id: 2
	},
	{
		label: 'Security',
		path: APP_PATHS.security,
		id: 3
	},
	{
		type: 'divider',
		id: 4
	},
	{
		label: 'Display',
		path: APP_PATHS.display,
		id: 5
	},
	{
		label: 'Design',
		path: APP_PATHS.design,
		id: 6
	},
	{
		label: 'Texts',
		path: APP_PATHS.texts,
		id: 7
	},
	{
		type: 'divider',
		id: 8
	},
	{
		label: 'Support',
		path: APP_PATHS.support,
		id: 9
	},
	{
		label: 'Upgrade',
		path: APP_PATHS.upgrade,
		color: 'secondary' as const,
		id: 10
	}
];

export { SIDE_MENU_OPTIONS };
