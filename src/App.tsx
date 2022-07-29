import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Messenger } from './components/messenger/Messenger';
import { TEST_SITE_ID } from './helpers/constants/commons';
import { selectMessages } from './store/reducers/messages/selectors';
import { authorizeUserRequested } from './store/sagas/user/actionCreators';
import './assets/css/globals.css';

type T_Props = {};

const App: FC<T_Props> = () => {
	const messages = useSelector(selectMessages);
	const dispatch = useDispatch();
	console.log(messages);

	useEffect(() => {
		dispatch(authorizeUserRequested(TEST_SITE_ID));
	}, []);

	return <Messenger />;
};

export default App;
