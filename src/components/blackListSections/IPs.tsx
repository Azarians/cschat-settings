import React, { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TranslatedText } from '../../components/translatedText/TranslatedText';
import { IP_REG_EXP } from '../../helpers/constants/commons';
import { updateBlackList } from '../../store/reducers/settings/actionCreators';
import { selectBLackListIPs } from '../../store/reducers/settings/selectors';
import { ChipList } from '../chipList/ChipList';
import BlockIcon from '@mui/icons-material/Block';
import { Divider, IconButton, TextField, Tooltip } from '@mui/material';
import Stack from '@mui/material/Stack';

type T_Props = {};

const IPs: FC<T_Props> = () => {
	const [newIP, setNewIP] = useState<string>('');
	const [isIPInvalid, setIsIPInvalid] = useState<Boolean>(false);
	const [IPToHighlight, setIPToHighlight] = useState<string>('');
	const blockedIPs = useSelector(selectBLackListIPs);
	const dispatch = useDispatch();

	const blockIP = () => {
		const IPToAdd = newIP.trim();
		if (!IPToAdd) return;
		if (!IP_REG_EXP.test(IPToAdd)) return setIsIPInvalid(true);
		if (blockedIPs.includes(IPToAdd)) {
			highlightIP(IPToAdd);
		} else {
			dispatch(
				updateBlackList({
					ips: [...blockedIPs, IPToAdd]
				})
			);
		}
		setNewIP('');
	};

	const unblockIP = useCallback(
		(ip: string) => {
			dispatch(
				updateBlackList({
					ips: blockedIPs.filter((i) => i !== ip)
				})
			);
		},
		[blockedIPs]
	);

	const highlightIP = (ip: string) => {
		setIPToHighlight(ip);
		setTimeout(() => {
			setIPToHighlight('');
		}, 200);
	};

	return (
		<Stack spacing={2}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					blockIP();
				}}
			>
				<Stack
					direction='row'
					spacing={1}
				>
					<TextField
						variant='outlined'
						fullWidth
						label='IP to block'
						value={newIP}
						onChange={(e) => {
							const { value } = e.target;
							if (isIPInvalid) setIsIPInvalid(false);
							setNewIP(value);
						}}
						onBlur={blockIP}
						{...(isIPInvalid && {
							error: true,
							helperText: <TranslatedText>Invalid IP address provided</TranslatedText>
						})}
					/>
					<Tooltip title={<TranslatedText>Block IP</TranslatedText>}>
						<IconButton sx={{ width: '40px', height: '40px' }}>
							<BlockIcon color='primary' />
						</IconButton>
					</Tooltip>
				</Stack>
			</form>
			{!!blockedIPs.length && (
				<>
					<Divider />
					<ChipList
						list={blockedIPs}
						highlighedElement={IPToHighlight}
						onRemoveClick={unblockIP}
						label='Blocked IPs'
					/>
				</>
			)}
		</Stack>
	);
};

export { IPs };
