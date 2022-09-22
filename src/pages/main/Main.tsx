import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import { TranslatedText } from '../../components/translatedText/TranslatedText';
import { APP_PATHS } from '../../helpers/constants/commons';
import { openDashboard } from '../../helpers/functions/commons';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SecurityOutlined from '@mui/icons-material/SecurityOutlined';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type T_Props = {};

const Main: FC<T_Props> = () => {
	return (
		<Stack
			justifyContent='space-between'
			height='100%'
		>
			<Stack
				alignItems='center'
				padding={2}
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
						with site visitors via Tukse Chat Inbox.
					</TranslatedText>
				</Typography>
				<Stack spacing={2}>
					<Button
						variant='contained'
						onClick={() => openDashboard({ urlParams: { page: 'home' } })}
					>
						<TranslatedText>Manage Chat</TranslatedText>
					</Button>
					<Button
						variant='outlined'
						onClick={() => openDashboard({ urlParams: { page: 'inbox' } })}
					>
						<TranslatedText>Open Inbox</TranslatedText>
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
							<NavLink to={`/${APP_PATHS.security}/${APP_PATHS.blackList}`}>
								<Link
									underline='hover'
									component='span'
								>
									<TranslatedText>Chat Black List</TranslatedText>
								</Link>
							</NavLink>
						</ListItemText>
					</ListItem>
				</List>
			</Stack>
		</Stack>
	);
};

export { Main };
