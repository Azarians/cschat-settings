import React, { FC } from 'react';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
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
					Engage visitors and capture leads. Customize your chat settings, or chat with
					site visitors via CSChat Inbox.
				</Typography>
				<Stack spacing={2}>
					<Button
						variant='contained'
						onClick={() => openDashboard({ urlParams: { page: 'home' } })}
						size='small'
					>
						Manage Chat
					</Button>
					<Button
						variant='outlined'
						onClick={() => openDashboard({ urlParams: { page: 'messages' } })}
						size='small'
					>
						See Messages
					</Button>
				</Stack>
			</Stack>
			<Stack>
				<SectionHeader>Prompt Actions</SectionHeader>
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
								Manage Chat Rooms
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
								Chat Active Hours Schedule
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
								Chat Black List
							</Link>
						</ListItemText>
					</ListItem>
				</List>
			</Stack>
		</Stack>
	);
};

export { Main };
