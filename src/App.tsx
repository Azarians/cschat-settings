import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Messenger } from './components/messenger/Messenger';
import { UsersSelector } from './components/usersSelector/UsersSelctor';
import { SITE_ID } from './helpers/constants/commons';
import { selectMessages, selectSelectedUid } from './store/reducers/messages/selectors';
import { authorizeAdminRequested } from './store/sagas/admin/actionCreators';
import './assets/css/globals.css';

type T_Props = {};

const App: FC<T_Props> = () => {
	const messages = useSelector(selectMessages);
	const selectedUId = useSelector(selectSelectedUid);
	const dispatch = useDispatch();
	console.log(messages);

	useEffect(() => {
		dispatch(authorizeAdminRequested(SITE_ID));
	}, []);

	return <>{selectedUId ? <Messenger /> : <UsersSelector />}</>;
};

export default App;
