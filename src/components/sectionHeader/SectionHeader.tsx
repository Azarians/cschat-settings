import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type T_Props = {
	children: JSX.Element | string;
	hideTopBorder?: boolean;
	hideBottomBorder?: boolean;
	showBackButton?: boolean;
};

const SectionHeader: FC<T_Props> = ({
	children,
	hideTopBorder,
	hideBottomBorder,
	showBackButton
}) => {
	const navigate = useNavigate();

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

			<Stack
				direction='row'
				position='relative'
				alignItems='center'
				justifyContent='center'
			>
				{showBackButton && (
					<Box
						position='absolute'
						left='16px'
						display='flex'
						onClick={() => navigate(-1)}
						sx={{ cursor: 'pointer' }}
					>
						<ArrowBackIcon color='primary' />
					</Box>
				)}

				<Typography
					variant='h6'
					textAlign='center'
					sx={{ fontWeight: 300, fontSize: '1.2rem' }}
				>
					{children}
				</Typography>
			</Stack>

			{hideBottomBorder ? <span /> : <Divider />}
		</Stack>
	);
};

export default SectionHeader;
