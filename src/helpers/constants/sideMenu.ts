import { APP_PATHS } from './commons';

const SIDE_MENU_OPTIONS = [
	{
		label: 'Main',
		path: APP_PATHS.main,
		id: 0
	},
	{
		label: 'Localize',
		path: APP_PATHS.localize,
		id: 1
	},
	{
		label: 'Security',
		path: APP_PATHS.security,
		id: 2
	},
	{
		type: 'divider',
		id: 3
	},
	{
		label: 'Display',
		path: APP_PATHS.display,
		id: 4
	},
	{
		label: 'Design',
		path: APP_PATHS.design,
		id: 5
	},
	{
		label: 'Texts',
		path: APP_PATHS.texts,
		id: 6
	},
	{
		type: 'divider',
		id: 7
	},
	{
		label: 'Support',
		path: APP_PATHS.support,
		id: 8
	},
	{
		label: 'Upgrade',
		path: APP_PATHS.upgrade,
		color: 'secondary' as const,
		id: 9
	}
];

export { SIDE_MENU_OPTIONS };
