import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SectionHeader from '../../../components/sectionHeader/SectionHeader';
import { selectUsersList } from './../../../store/reducers/users/selectors';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

type T_Props = {};

const UsersSelector: FC<T_Props> = () => {
	const users = useSelector(selectUsersList);

	return (
		<List
			subheader={
				<ListSubheader sx={{ padding: 0 }}>
					<SectionHeader hideTopBorder>Users List</SectionHeader>
				</ListSubheader>
			}
			sx={{ overflow: 'auto', maxHeight: '100vh' }}
		>
			{users.map((user) => (
				<NavLink
					to={user._id}
					key={user._id}
				>
					<ListItemButton>
						<ListItemText primary={user._id} />
					</ListItemButton>
				</NavLink>
			))}
		</List>
	);
};

export { UsersSelector };
