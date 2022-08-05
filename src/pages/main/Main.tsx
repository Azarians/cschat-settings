import React, { FC } from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import { TranslatedText } from '../../components/translatedText/TranslatedText';
import { openDashboard } from '../../helpers/functions/commons';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SecurityOutlined from '@mui/icons-material/SecurityOutlined';
import { Link, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';

type T_Props = {};

const Main: FC<T_Props> = () => {
	return (
		<Stack
			justifyContent='space-between'
			height='100%'
		>
			<Stack
				alignItems='center'
				padding='18px 24px'
				spacing={3}
			>
				<img
					src='https://cdn-icons-png.flaticon.com/512/134/134914.png'
					style={{ width: '20%' }}
				/>
				<Typography
					variant='body2'
					textAlign='center'
				>
					<TranslatedText>
						Engage visitors and capture leads. Customize your chat settings, or chat
						with site visitors via CSChat Inbox.
					</TranslatedText>
				</Typography>
				<Stack spacing={2}>
					<Button
						variant='contained'
						onClick={() => openDashboard({ urlParams: { page: 'home' } })}
						size='small'
					>
						<TranslatedText>Manage Chat</TranslatedText>
					</Button>
					<Button
						variant='outlined'
						onClick={() => openDashboard({ urlParams: { page: 'messages' } })}
						size='small'
					>
						<TranslatedText>See Messages</TranslatedText>
					</Button>
				</Stack>
			</Stack>
			<Stack>
				<SectionHeader>
					<TranslatedText>Prompt Actions</TranslatedText>
				</SectionHeader>
				<List>
					<ListItem>
						<ListItemIcon>
							<ForumOutlinedIcon color='primary' />
						</ListItemIcon>
						<ListItemText>
							<Link
								underline='hover'
								onClick={() => openDashboard({ urlParams: { page: 'chatRooms' } })}
							>
								<TranslatedText>Manage Chat Rooms</TranslatedText>
							</Link>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<AccessTimeOutlinedIcon color='primary' />
						</ListItemIcon>
						<ListItemText>
							<Link
								underline='hover'
								onClick={() =>
									openDashboard({ urlParams: { page: 'activeHours' } })
								}
							>
								<TranslatedText>Chat Active Hours Schedule</TranslatedText>
							</Link>
						</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemIcon>
							<SecurityOutlined color='primary' />
						</ListItemIcon>
						<ListItemText>
							<Link
								underline='hover'
								onClick={() => openDashboard({ urlParams: { page: 'blackList' } })}
							>
								<TranslatedText>Chat Black List</TranslatedText>
							</Link>
						</ListItemText>
					</ListItem>
				</List>
			</Stack>
		</Stack>
	);
};

export { Main };
