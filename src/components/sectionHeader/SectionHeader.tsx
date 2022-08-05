import React, { FC } from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type T_Props = {
	children: JSX.Element | string;
	hideTopBorder?: boolean;
	hideBottomBorder?: boolean;
};

const SectionHeader: FC<T_Props> = ({ children, hideTopBorder, hideBottomBorder }) => {
	return (
		<Stack
			sx={{
				backgroundColor: '#f0f3f5',
				height: '42px'
			}}
			justifyContent='space-between'
			width='100%'
		>
			{hideTopBorder ? <span /> : <Divider />}
			<Typography
				variant='h6'
				textAlign='center'
				sx={{ fontWeight: 300, fontSize: '1.2rem' }}
			>
				{children}
			</Typography>
			{hideBottomBorder ? <span /> : <Divider />}
		</Stack>
	);
};

export default SectionHeader;
