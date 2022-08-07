import React, { FC } from 'react';
import Stack from '@mui/material/Stack';

type T_Props = {};

const Texts: FC<T_Props> = () => {
	return (
		<Stack
			alignItems='center'
			padding={2}
			spacing={2}
		>
			Texts
		</Stack>
	);
};

export { Texts };
