import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Messenger } from '../../components/messenger/Messenger';
import { UsersSelector } from '../../components/usersSelector/UsersSelctor';

type T_Props = {};

const Chat: FC<T_Props> = () => {
	return (
		<Routes>
			<Route
				index
				element={<UsersSelector />}
			/>
			<Route
				path=':uid'
				element={<Messenger />}
			/>
		</Routes>
	);
};

export { Chat };
