import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SIDE_MENU_OPTIONS } from '../../helpers/constants/sideMenu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import styles from './styles.module.css';

type T_Props = {};

const SideMenu: FC<T_Props> = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				{SIDE_MENU_OPTIONS.map(({ label, path, type, id, color }) =>
					type === 'divider' ? (
						<Box
							padding='0 4px'
							key={id}
						>
							<Divider />
						</Box>
					) : (
						<NavLink
							to={String(path)}
							key={id}
						>
							<Button
								size='small'
								sx={{ minWidth: 'unset' }}
								color={color}
							>
								{label}
							</Button>
						</NavLink>
					)
				)}
			</div>
		</div>
	);
};

export { SideMenu };
