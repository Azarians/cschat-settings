import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { SideMenu } from './components/sideMenu/SideMenu';
import { APP_PATHS } from './helpers/constants/commons';
import { Messenger, UsersSelector } from './pages/chat/Main';
import Design from './pages/design/Main';
import Display from './pages/display/Main';
import { Localize } from './pages/localize/Main';
import { Main } from './pages/main/Main';
import Security from './pages/security/Main';
import { Support } from './pages/support/Main';
import Texts from './pages/texts/Main';
import { Upgrade } from './pages/upgrade/Main';
import { selectHasRequestsInProcess } from './store/reducers/loader/selectors';
import { authorizeChatRequested } from './store/sagas/chat/actionCreators';
import './assets/css/globals.css';
import './assets/css/material.css';

type T_Props = {};

const App: FC<T_Props> = () => {
	const dispatch = useDispatch();
	const hasRequestsInProcess = useSelector(selectHasRequestsInProcess);

	useEffect(() => {
		dispatch(authorizeChatRequested());
	}, []);

	if (hasRequestsInProcess) return <>Loading...</>;

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
								<Route path={APP_PATHS.chat}>
									<Route
										index
										element={<UsersSelector />}
									/>
									<Route
										path=':userId'
										element={<Messenger />}
									/>
								</Route>
								<Route
									path={APP_PATHS.localize}
									element={<Localize />}
								/>
								<Route
									path={APP_PATHS.security}
									element={<Security />}
								/>
								<Route
									path={APP_PATHS.display}
									element={<Display />}
								/>
								<Route
									path={APP_PATHS.design}
									element={<Design />}
								/>
								<Route
									path={APP_PATHS.texts}
									element={<Texts />}
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
