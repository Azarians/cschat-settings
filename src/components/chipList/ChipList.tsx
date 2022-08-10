import React, { FC } from 'react';
import { TranslatedText } from '../translatedText/TranslatedText';
import { Chip, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

type T_Props = {
	list: string[];
	highlighedElement?: string;
	onRemoveClick: (element: string) => void;
	label?: string;
};

const ChipList: FC<T_Props> = ({ list, highlighedElement, onRemoveClick, label }) => {
	return (
		<Stack>
			{label && (
				<Typography
					variant='body2'
					gutterBottom
				>
					<TranslatedText>{label}</TranslatedText>
				</Typography>
			)}
			<Box
				display='flex'
				flexWrap='wrap'
			>
				{list.map((element) => {
					const isHighlighted = highlighedElement === element;
					return (
						<Box
							marginRight={1}
							marginBottom={1}
							key={element}
						>
							<Chip
								label={element}
								size='small'
								variant={isHighlighted ? 'filled' : 'outlined'}
								key={element + isHighlighted}
								sx={{ border: '1px solid #bdbdbd' }}
								onDelete={() => onRemoveClick(element)}
							/>
						</Box>
					);
				})}
			</Box>
		</Stack>
	);
};

export { ChipList };
