import React, { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TranslatedText } from '../../components/translatedText/TranslatedText';
import { EMAIL_REG_EXP } from '../../helpers/constants/commons';
import { updateBlackList } from '../../store/reducers/settings/actionCreators';
import { selectBLackListEmails } from '../../store/reducers/settings/selectors';
import { ChipList } from '../chipList/ChipList';
import BlockIcon from '@mui/icons-material/Block';
import { Divider, IconButton, TextField, Tooltip } from '@mui/material';
import Stack from '@mui/material/Stack';

type T_Props = {};

const Emails: FC<T_Props> = () => {
	const [newEmail, setNewEmail] = useState<string>('');
	const [isEmailInvalid, setIsEmailInvalid] = useState<Boolean>(false);
	const [emailToHighlight, setEmailToHighlight] = useState<string>('');
	const emails = useSelector(selectBLackListEmails);
	const dispatch = useDispatch();

	const blockEmail = () => {
		const emailToAdd = newEmail.trim();
		if (!emailToAdd) return;
		if (!EMAIL_REG_EXP.test(emailToAdd)) return setIsEmailInvalid(true);
		if (emails.includes(emailToAdd)) {
			highlightEmail(emailToAdd);
		} else {
			dispatch(
				updateBlackList({
					emails: [...emails, emailToAdd]
				})
			);
		}
		setNewEmail('');
	};

	const unblockEmail = useCallback(
		(email: string) => {
			dispatch(
				updateBlackList({
					emails: emails.filter((e) => e !== email)
				})
			);
		},
		[emails]
	);

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
						fullWidth
						label='Email address to block'
						value={newEmail}
						onChange={(e) => {
							const { value } = e.target;
							if (isEmailInvalid) setIsEmailInvalid(false);
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
						<IconButton sx={{ width: '40px', height: '40px' }}>
							<BlockIcon color='primary' />
						</IconButton>
					</Tooltip>
				</Stack>
			</form>
			{!!emails.length && (
				<>
					<Divider />
					<ChipList
						list={emails}
						highlighedElement={emailToHighlight}
						onRemoveClick={unblockEmail}
						label='Blocked Emails'
					/>
				</>
			)}
		</Stack>
	);
};

export { Emails };
