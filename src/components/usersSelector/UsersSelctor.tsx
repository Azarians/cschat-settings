import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUsersList } from '../../store/reducers/users/selectors';
import styles from './styles.module.css';

type T_Props = {};

const UsersSelector: FC<T_Props> = () => {
	const users = useSelector(selectUsersList);

	return (
		<div className={styles.container}>
			{users.map((user) => (
				<NavLink to={user._id}>
					<div
						className={styles.list_element}
						key={user._id}
					>
						{user._id}
					</div>
				</NavLink>
			))}
		</div>
	);
};

export { UsersSelector };
