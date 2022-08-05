import React, { FC } from 'react';
import { Stack } from '@mui/material';

type T_Props = {};

const Display: FC<T_Props> = () => {
	return (
		<Stack
			alignItems='center'
			padding='18px 24px'
			spacing={2}
		>
			Display
		</Stack>
	);
};

export { Display };
