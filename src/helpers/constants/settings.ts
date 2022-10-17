import { Countries } from '../../components/blackListSections/Countries';
import { Emails } from '../../components/blackListSections/Emails';
import { IPs } from '../../components/blackListSections/IPs';
import { AUTHORIZATION_FORM_FIELD_NAMES } from 'cschat-helpers';

const AUTHORIZATION_FIELDS = [
	{
		name: AUTHORIZATION_FORM_FIELD_NAMES.firstName,
		label: 'First Name',
		id: 0
	},
	{
		name: AUTHORIZATION_FORM_FIELD_NAMES.lastName,
		label: 'Last Name',
		id: 1
	},
	{
		name: AUTHORIZATION_FORM_FIELD_NAMES.email,
		label: 'Email Address',
		id: 2
	}
];

const BLACK_LIST_SECTIONS = [
	{
		id: 0,
		label: 'Emails',
		Content: Emails
	},
	{
		id: 1,
		label: 'Countries',
		Content: Countries
	},
	{
		id: 2,
		label: 'IPs',
		Content: IPs
	}
];

export { AUTHORIZATION_FIELDS, BLACK_LIST_SECTIONS };
