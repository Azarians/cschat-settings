import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUsersList } from './../../../store/reducers/users/selectors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from './styles.module.css';

type T_Props = {};

const UsersSelector: FC<T_Props> = () => {
	const users = useSelector(selectUsersList);

	return (
		<div className={styles.container}>
			{users.map((user) => (
				<NavLink
					to={user._id}
					key={user._id}
				>
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText primary={user._id} />
							</ListItemButton>
						</ListItem>
					</List>
				</NavLink>
			))}
		</div>
	);
};

export { UsersSelector };
