import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TranslatedText } from '../../../../components/translatedText/TranslatedText';
import { EMAIL_REG_EXP } from '../../../../helpers/constants/commons';
import { updateBlackList } from '../../../../store/reducers/settings/actionCreators';
import { selectBLackListEmails } from '../../../../store/reducers/settings/selectors';
import BlockIcon from '@mui/icons-material/Block';
import { Box, Chip, Divider, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

type T_Props = {};

const Emails: FC<T_Props> = () => {
	const [newEmail, setNewEmail] = useState<string>('');
	const [isEmailInvalid, setIsEmailInvalid] = useState<Boolean>(false);
	const [emailToHighlight, setEmailToHighlight] = useState<string>('');
	const emails = useSelector(selectBLackListEmails);
	const dispatch = useDispatch();

	const blockEmail = () => {
		if (!newEmail.trim()) return;
		if (!EMAIL_REG_EXP.test(newEmail)) return setIsEmailInvalid(true);
		if (isEmailInvalid) setIsEmailInvalid(false);
		if (emails.includes(newEmail)) {
			highlightEmail(newEmail);
		} else {
			dispatch(
				updateBlackList({
					emails: [...emails, newEmail]
				})
			);
		}
		setNewEmail('');
	};

	const unblockEmail = (email: string) => {
		dispatch(
			updateBlackList({
				emails: emails.filter((e) => e !== email)
			})
		);
	};

	const highlightEmail = (email: string) => {
		setEmailToHighlight(email);
		setTimeout(() => {
			setEmailToHighlight('');
		}, 200);
	};

	return (
		<Stack spacing={2}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					blockEmail();
				}}
			>
				<Stack
					direction='row'
					spacing={1}
				>
					<TextField
						variant='outlined'
						size='small'
						fullWidth
						label='Email address to block'
						value={newEmail}
						onChange={(e) => {
							const { value } = e.target;
							if (value === '' && isEmailInvalid) setIsEmailInvalid(false);
							setNewEmail(value);
						}}
						onBlur={blockEmail}
						{...(isEmailInvalid && {
							error: true,
							helperText: (
								<TranslatedText>Invalid Email address provided</TranslatedText>
							)
						})}
					/>
					<Tooltip title={<TranslatedText>Block Email</TranslatedText>}>
						<IconButton
							sx={{
								width: '40px',
								height: '40px'
							}}
						>
							<BlockIcon color='primary' />
						</IconButton>
					</Tooltip>
				</Stack>
			</form>
			{!!emails.length && (
				<>
					<Divider />
					<Stack>
						<Typography
							variant='body2'
							gutterBottom
						>
							<TranslatedText>Blocked Emails</TranslatedText>
						</Typography>
						<Box
							display='flex'
							flexWrap='wrap'
						>
							{emails.map((email) => {
								const isHighlighted = emailToHighlight === email;
								return (
									<Box
										marginRight={1}
										marginBottom={1}
										key={email}
									>
										<Chip
											label={email}
											size='small'
											variant={isHighlighted ? 'filled' : 'outlined'}
											key={email + isHighlighted}
											sx={{ border: '1px solid #bdbdbd' }}
											onDelete={() => unblockEmail(email)}
										/>
									</Box>
								);
							})}
						</Box>
					</Stack>
				</>
			)}
		</Stack>
	);
};

export { Emails };
