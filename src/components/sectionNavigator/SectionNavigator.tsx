import React, { FC } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Divider, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';

type T_Props = {
	children: JSX.Element | string;
	hideTopBorder?: boolean;
	hideBottomBorder?: boolean;
};

const SectionNavigator: FC<T_Props> = ({ children, hideTopBorder, hideBottomBorder }) => {
	return (
		<Box>
			{!hideTopBorder && <Divider />}
			<ListItemButton>
				<ListItemText primary={children} />
				<KeyboardArrowRightIcon color='primary' />
			</ListItemButton>
			{!hideBottomBorder && <Divider />}
		</Box>
	);
};

export { SectionNavigator };
