import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectMessages } from './store/reducers/messages/selectors';

type T_Props = {};

const App: FC<T_Props> = () => {
	const messages = useSelector(selectMessages);
	console.log(messages);

	return <div>coming soon...</div>;
};

export default App;
