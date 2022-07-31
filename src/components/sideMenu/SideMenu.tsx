import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { APP_PATHS } from '../../helpers/constants/commons';
import styles from './styles.module.css';

type T_Props = {};

const SideMenu: FC<T_Props> = () => {
	return (
		<div className={styles.container}>
			{Object.values(APP_PATHS).map((path) => (
				<div>
					<NavLink to={path}>{path}</NavLink>
				</div>
			))}
		</div>
	);
};

export { SideMenu };
