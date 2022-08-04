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
		type: 'divider',
		id: 3
	},
	{
		label: 'Support',
		path: APP_PATHS.support,
		id: 4
	},
	{
		label: 'Upgrade',
		path: APP_PATHS.upgrade,
		color: 'secondary' as const,
		id: 5
	}
];

export { SIDE_MENU_OPTIONS };
