import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { SideMenu } from './components/sideMenu/SideMenu';
import { APP_PATHS, SITE_ID } from './helpers/constants/commons';
import { Chat } from './pages/chat/Main';
import { Localize } from './pages/localize/Main';
import { Main } from './pages/main/Main';
import { Support } from './pages/support/Main';
import { Upgrade } from './pages/upgrade/Main';
import { authorizeAdminRequested } from './store/sagas/admin/actionCreators';
import './assets/css/globals.css';

type T_Props = {};

const App: FC<T_Props> = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authorizeAdminRequested(SITE_ID));
	}, []);

	return (
		<BrowserRouter>
			<Suspense fallback='Loading...'>
				<div className='app-content'>
					<Routes>
						<Route
							path='/*'
							element={<SideMenu />}
						/>
					</Routes>
					<div className='page-wrapper'>
						<Routes>
							<Route path='/*'>
								<Route
									path={APP_PATHS.main}
									element={<Main />}
								/>
								<Route
									path={APP_PATHS.localize}
									element={<Localize />}
								/>
								<Route
									path={APP_PATHS.chat}
									element={<Chat />}
								/>
								<Route
									path={APP_PATHS.support}
									element={<Support />}
								/>
								<Route
									path={APP_PATHS.upgrade}
									element={<Upgrade />}
								/>
								<Route
									path='*'
									element={<Navigate to={`/${APP_PATHS.main}`} />}
								/>
							</Route>
						</Routes>
					</div>
				</div>
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
