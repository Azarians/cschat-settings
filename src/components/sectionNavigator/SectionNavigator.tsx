import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Divider, ListItemButton, ListItemText } from '@mui/material';

type T_Props = {
	children: JSX.Element | string;
	hideTopBorder?: boolean;
	hideBottomBorder?: boolean;
	to: string;
};

const SectionNavigator: FC<T_Props> = ({ children, hideTopBorder, hideBottomBorder, to }) => {
	return (
		<NavLink to={to}>
			{!hideTopBorder && <Divider />}
			<ListItemButton>
				<ListItemText primary={children} />
				<KeyboardArrowRightIcon color='primary' />
			</ListItemButton>
			{!hideBottomBorder && <Divider />}
		</NavLink>
	);
};

export { SectionNavigator };
