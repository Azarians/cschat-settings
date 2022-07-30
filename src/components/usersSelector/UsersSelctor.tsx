import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUserId } from '../../store/reducers/messages/actionCreators';
import { selectUsersList } from '../../store/reducers/users/selectors';
import styles from './styles.module.css';

type T_Props = {};

const UsersSelector: FC<T_Props> = () => {
	const users = useSelector(selectUsersList);
	const dispatch = useDispatch();

	return (
		<div className={styles.container}>
			{users.map((user) => (
				<div
					className={styles.list_element}
					onClick={() => dispatch(setSelectedUserId(user._id))}
					key={user._id}
				>
					{user._id}
				</div>
			))}
		</div>
	);
};

export { UsersSelector };
