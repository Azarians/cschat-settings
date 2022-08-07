import React, { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

type T_Props = {};

const Loader: FC<T_Props> = () => {
	return (
		<Backdrop
			sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'transparent' }}
			open={true}
		>
			<CircularProgress color='primary' />
		</Backdrop>
	);
};

export { Loader };
